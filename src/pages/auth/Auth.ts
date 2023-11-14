import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import {AuthLayouts} from '../../layouts/Auth';
import { template } from "./template";
import Button from "../../components/Button";
import { InputAuth } from "../../components/InputAuth";

export default class Auth extends Component {
    constructor(tag = 'div', props: Props = {}) {
        
        props.content = new AuthLayouts({
            title: 'Вход',
            inputs: [
                new InputAuth({id: 'email', placeholder: 'Логин', type: 'email', name: 'login'}),
                new InputAuth({id: 'password', placeholder: 'Пароль', type: 'password', name: 'password'})
            ],
            buttons: [
                new Button({text: 'Авторизоваться', attribute: {class: 'button filled'}}),
                new Button({text: 'Нет аккаунта', attribute: {class: 'button'}})
            ],
        })

        super(tag, props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}