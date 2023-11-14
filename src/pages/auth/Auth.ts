import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import {AuthLayouts} from '../../layouts/Auth';
import { template } from "./template";

export default class Auth extends Component {
    constructor(tag = 'div', props: Props = {}) {
        
        props.content = new AuthLayouts({
            title: 'Вход',
        })

        super(tag, props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}