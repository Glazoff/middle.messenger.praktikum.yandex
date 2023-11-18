import { Block } from "../../components/Block";
import Form from "../../components/Form";
import Img from "../../components/Img";
import Title from "../../components/Title";
import { Component } from "../../service/Component";
import { Props } from "../../service/Component/types";
import { checkFocusoutValidation, checkSubmitValidation } from "../../utils/checkValidation";
import Button from "./components/Button";
import Head from "./components/Head";
import Input from "./components/Input";
import { template } from "./template";
import img from '/img/Ellipse 17.svg';


export default class Profile extends Component {
    constructor(tag = 'div', props: Props = {}) {

        props.head = new Head({
            content: [
                new Img({attribute: {src: img, name: 'avatar'}}),
                new Title({text: 'Иван', attribute: {class: 'title'}})
            ],
        }),

        props.form = new Form({
            content: [
                new Block({
                    content: [
                        new Input({id: 'email', placeholder: 'Почта', type: 'email', value: 'pochta@yandex.ru', name: 'email'}),
                        new Input({id: 'login', placeholder: 'Логин', type: 'text', value: 'ivanivanov', name: 'login'}),
                        new Input({id: 'fname', placeholder: 'Имя', type: 'text', value: 'Иван', name: 'first_name'}),
                        new Input({id: 'lname', placeholder: 'Фамилия', type: 'text', value: 'Иванов', name: 'second_name'}),
                        new Input({id: 'name_chat', placeholder: 'Имя в чате', type: 'text', value: 'Иван', name: 'display_name'}),
                        new Input({id: 'tel', placeholder: 'Телефон', type: 'tel', value: '+7 (909) 967 30 30', name: 'phone'}),
                    ],
                    attribute: {
                        class: 'blok-profile__inputs',
                    },
                }),

                new Block({
                    content: [
                        new Button({text: 'Изменить данные'}),
                        new Button({text: 'Изменить пароль'}),
                        new Button({text: 'Выйти', red: true})
                    ],
                    attribute: {
                        class: 'blok-profile__buttons',
                    },
                })

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
            },

            
            attribute: {
                class: 'blok-profile__form',
            }
        })


        props.attribute = {
            class: 'blok-profile',
        }
        super(tag, props);
    };

    render() {
        return this.compile(template, this.props);
    }
}
