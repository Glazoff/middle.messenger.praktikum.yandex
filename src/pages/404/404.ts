import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import { template } from "./template";

import Title from '../../components/Title';
import Textarea from "../../components/Textarea";
import Button from "../../components/Button";

export default class Page404 extends Component {
    constructor(tag = 'div', props: Props = {}) {
        props.title = new Title({text: '404', attribute: {class: 'error-block__title'}});
        props.info = new Textarea({text: 'Мы уже фиксим', attribute: {class: 'error-block__content'}});
        props.button = new Button({text: 'Назад к чатам', attribute: {class: 'button'}})

        props.attribute = {
            class: 'error-block',
        }

        super(tag, props);
    }

    render() {
        return this.compile(template, this.props)
    }

};
