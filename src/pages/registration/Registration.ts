import Button from "../../components/Button";
import { InputAuth } from "../../components/InputAuth";
import { AuthLayouts } from "../../layouts/Auth";
import { Component } from "../../service/Component"
import { Props } from "../../service/Component/types";
import { template } from "./template";

export default class Registration extends Component {
    constructor(tag = 'div', props: Props = {}) {
        
        props.content = new AuthLayouts({
            title: 'Вход',
            inputs: [
                new InputAuth({id: 'email', placeholder: 'Почта', type: 'email', name: 'email'}),
                new InputAuth({id: 'login', placeholder: 'Логин', type: 'email', name: 'login'}),
                new InputAuth({id: 'fname', placeholder: 'Имя', type: 'text', name: 'first_name'}),
                new InputAuth({id: 'lname', placeholder: 'Фамилия', type: 'text', name: 'second_name'}),
                new InputAuth({id: 'tel', placeholder: 'Телефон', type: 'tel', name: 'phone'}),
                new InputAuth({id: 'password', placeholder: 'Пароль', type: 'password', name: 'password'}),
                new InputAuth({id: 'repeat_password"', placeholder: 'Пароль (еще раз)', type: 'password', name: 'password'}),

            ],
            buttons: [
                new Button({text: 'Зарегистрироваться', attribute: {class: 'button filled'}}),
                new Button({text: 'Войти', attribute: {class: 'button'}})
            ],
        })
        super(tag, props)
    }

    render() {
        return this.compile(template, this.props);
    }
}