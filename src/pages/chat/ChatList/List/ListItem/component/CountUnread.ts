import { Component } from "../../../../../../service/Component";
import { Props } from "../../../../../../service/Component/types";
import { template } from "./template";

export class CountUnread extends Component{
    constructor(props: Props = {}){
        const {count} = props;

        props.count = count;

        props.attribute = {
            class: `unread-block`,
        }
        super('div', props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}