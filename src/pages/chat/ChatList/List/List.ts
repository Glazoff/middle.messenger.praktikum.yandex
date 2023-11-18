import { Component } from "../../../../service/Component";
import { Props } from "../../../../service/Component/types";
import { ListItem } from "./ListItem";
import { template } from "./template";

export class List extends Component {
    constructor(props: Props = {}){
        props.listChat = [
            new ListItem(),
            new ListItem(),
            new ListItem()
        ]

        props.attribute = {
            class: 'chat-list__list'
        }

        super('div', props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
