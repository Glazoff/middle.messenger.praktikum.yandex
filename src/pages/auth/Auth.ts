import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import {AuthLayouts} from '../../layouts/Auth';
import { template } from "./template";
import Button from "../../components/Button";
import { Input } from "../../components/Input";
import {checkSubmitValidation, checkFocusoutValidation} from '../../utils/checkValidation';

export default class Auth extends Component {
    constructor(tag = 'div', props: Props = {}) {
        
        props.content = new AuthLayouts({
            title: 'Вход',
            inputs: [
                new Input({id: 'email', placeholder: 'Логин', type: 'login',name: 'message'}),
                new Input({id: 'password', placeholder: 'Пароль', type: 'password', name: 'password'})
            ],
            buttons: [
                new Button({text: 'Авторизоваться', attribute: {class: 'button filled', type: 'submit'}}),
                new Button({text: 'Нет аккаунта', attribute: {class: 'button'}})
            ],
            events: {
                'submit': (e) => {
                    e.preventDefault();
                    checkSubmitValidation(e);
                },
                'focusout': (e) => {
                    e.preventDefault();
                    checkFocusoutValidation(e);          
                }
            }
        })

        super(tag, props);
    }

    public render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}