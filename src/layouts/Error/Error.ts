import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import { template } from "./template";
import Button from "../../components/Button";
import Textarea from "../../components/Textarea";
import Title from "../../components/Title";



export default class Error extends Component {
    constructor(tag = 'div', props: Props = {}) {
        const {title, info, buttonText} = props;
        
        props.title = new Title({text: title, attribute: {class: 'error-block__title'}});
        props.info = new Textarea({text: info, attribute: {class: 'error-block__content'}});
        props.button = new Button({text: buttonText, attribute: {class: 'button'}})

        props.attribute = {
            class: 'error-block',
        }

        super(tag, props);
    }

    render() {
        return this.compile(template, this.props)
    }
}
