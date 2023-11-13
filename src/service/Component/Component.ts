import { compile } from "handlebars";
import { v4 as makeUUID } from "uuid"

import { EventBus } from "../EventBus";

import { Props, Children, Meta } from "./types";

export class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render",
    };

    private element: null | HTMLElement = null;
    private meta: Meta;
    private id: string;
    private eventBus: EventBus;
    private children: Children<Component>;
    private isPropsUdate: boolean = false;
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
        this.props = this.makePropsProxy({...props, __id: this.id});

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

    public dispatchComponentDidMount() {
        this.eventBus.emit(Component.EVENTS.FLOW_CDM);
    };

    private _componentDidUpdate(oldProps: Props, newProps: Props) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
    };

    // переопределяется при написании компонета
    public componentDidUpdate(oldProps: Props, newProps: Props) {
        console.log('componentDidUpdate');

        console.log('oldProps',oldProps);
        console.log('newProps', newProps);
        return true;
    };

    private _render() {
        const block = this.render();

        if(this.element) {
            this.removeEvents();


            this.element.innerHTML = "";
            this.element.appendChild(block);

            this.addEvents();
            this.addAttribute();
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

                if(target[prop] !== value) {
                    target[prop] = value;
                    self.isPropsUdate = true;
                }

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
        const { tagName } = this.meta;

        this.element = this.createDocumentElement(tagName);
    };

    private createDocumentElement(tagName: string): HTMLTemplateElement | HTMLElement  {
        return document.createElement(tagName);
    };

    public compile(template: string, props: Props) {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
        });

        const fragment = this.createDocumentElement("template") as HTMLTemplateElement;

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

    private addEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
          this.element?.addEventListener(eventName, events[eventName]);
        });
    };

    private removeEvents() {
        const { events = {} } = this.props;

        Object.keys(events).forEach((eventName) => {
            this.element?.removeEventListener(eventName, events[eventName]);
        });
    };

    public setProps(newProps: Props) {
        if(!newProps) {
            return
        }

        this.isPropsUdate = false;

        const oldProps = {...this.props};

        const { props, children } = this.getChildren(newProps);

        if(Object.values(children).length) {
            Object.assign(this.children, children)
        }

        if(Object.values(props).length) {
            Object.assign(this.props, props)
        }

        if(this.isPropsUdate) {
            this.eventBus.emit(Component.EVENTS.FLOW_CDU, oldProps, this.props)
            this.isPropsUdate = false;
        }
    }

    private addAttribute() {
        const { attribute = {} } = this.props;

        Object.entries(attribute).forEach(([key, value]) => {
            this.element?.setAttribute(key, value);
        });
    }

    public show() {
        const element = this.getContent()
        if(element) element.style.display = "block";
    }

    public hide() {
        const element = this.getContent()
        if(element) element.style.display = "none";
    }
}
