import { compile } from "handlebars";
import { v4 as makeUUID } from "uuid"
import { EventBus } from "../EventBus";

import { Props, Children } from "./types";

export class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    private element: null | HTMLElement = null;
    private meta: null | Record<string , unknown> = null;
    private id: string;
    private eventBus: EventBus;
    private children: Children<Component>;
    public props: Props;

    constructor(tagName = "div", propsAndChildren = {}) {
        this.id = makeUUID();
        this.eventBus = new EventBus();
        const { props, children } = this.getChildren(propsAndChildren);
        this.meta = {
            tagName,
            props,
        };

        this.children = this.makePropsProxy(children);
        this.props = this.makePropsProxy(props);

        this.registerEvents(this.eventBus);
        this.eventBus.emit(Component.EVENTS.INIT);
    };

    // Lifecycle Methods start

    public init() {
        this.createResources();
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    };

    private _componentDidMount() {
        this.componentDidMount();
    };

    // переопределяется при написании компонета
    public componentDidMount() {};

    private _componentDidUpdate(oldProps: Props, newProps: Props) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    };

    // переопределяется при написании компонета
    public componentDidUpdate(oldProps: Props, newProps: Props) {
        oldProps;
        newProps;
        return true;
    };

    private _render() {
        const block = this.render();

        if(this.element) {
            this.element.innerHTML = "";
            this.element.appendChild(block);
        }
    };

    // переопределяется при написании компонета
    public render() {
        return this.compile('', this.props);
    };

    // Lifecycle Methods end

    private getChildren(propsAndChildren: Record<string, unknown>) {
        const children: Children<Component> = {};
        const props: Props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Component) {
            children[key] = value;
        } else {
            props[key] = value;
        }});
      
        return { children, props };
    };

    private makePropsProxy<T extends Props | Children<Component>>(props: T ): T {
        const self = this;

        return new Proxy(props, {
          set(target, prop, value) {
            target[prop] = value;
    
            self.eventBus.emit(Component.EVENTS.FLOW_CDU);
            return true;
          }
        });
    };

    private registerEvents(eventBus: EventBus) {
        eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    };

    private createResources() {
        const { tagName } = this.meta as Record<string, unknown>;

        this.element = this.createDocumentElement(tagName as string);
    };

    private createDocumentElement(tagName: string)  {
        return document.createElement(tagName);
    };

    public compile(template: string, props: Props) {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
        });

        const fragment: HTMLTemplateElement = this.createDocumentElement("template") as HTMLTemplateElement;

        fragment.innerHTML = compile(template)(propsAndStubs);

        Object.values(this.children).forEach((child) => {
            const stub = fragment.content.querySelector(`[data-id="${child.id}"]`);
    
            if(stub) {
                stub.replaceWith(child.getContent() as HTMLElement);
            }
        });

        return fragment.content;
    };

    public getContent() {
        return this.element;
    };
}
