import { Component } from "../../../service/Component";
import { Props } from "../../../service/Component/types";
import { Head } from "./Head";
import { List } from "./List";
import { template } from "./template";

export class ChatList extends Component {
    constructor(props: Props = {}) {

        props.head = new Head()
        props.list = new List()

        props.attribute = {
            class: 'chat-list'
        }

        super('div', props)
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
