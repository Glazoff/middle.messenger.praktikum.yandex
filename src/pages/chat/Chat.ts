import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import { ChatList } from "./ChatList";
import { template } from "./template";

export class Chat extends Component {
    constructor(props: Props = {}) {

        props.chatList = new ChatList();

        props.attribute = {
            class: 'chat'
        }

        super('div', props)
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
