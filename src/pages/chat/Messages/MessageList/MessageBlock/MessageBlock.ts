import Textarea from "../../../../../components/Textarea";
import { Component } from "../../../../../service/Component";
import { Props } from "../../../../../service/Component/types";
import { template } from "./template";

export class MessageBlock extends Component{
    constructor(props: Props = {}){
        const {isMe, text, time} = props;

        props.text = new Textarea({text}),
        props.time = new Textarea({text: time, attribute: {class: 'time'}}),

        props.attribute = {
            class: `message-block ${isMe ? 'message-block-me' : 'message-block-its'}`
        }
        super('div', props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}