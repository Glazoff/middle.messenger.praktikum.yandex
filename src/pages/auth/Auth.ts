import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import AuthLayouts from '../../layouts/Auth';
import template from './template';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { checkSubmitValidation, checkFocusoutValidation } from '../../utils/checkValidation';
import Router from '../../service/Router/Router';

const router = new Router('#app');

const inputs = [
  new Input({
    id: 'email', placeholder: 'Логин', type: 'login', name: 'login',
  }),
  new Input({
    id: 'password', placeholder: 'Пароль', type: 'password', name: 'password',
  }),
];

export default class Auth extends Component {
  constructor(tag = 'div', props: Props = {}) {
    props.content = new AuthLayouts({
      title: 'Вход',
      inputs,
      buttons: [
        new Button({
          text: 'Авторизоваться',
          attribute: { class: 'button filled', type: 'submit' },
          events: {
            click: () => { router.go('/messenger'); },
          },
        }),
        new Button({
          text: 'Нет аккаунта',
          attribute: { class: 'button' },
          events: {
            click: () => { router.go('/sign-up'); },
          },
        }),
      ],
      events: {
        submit: (e) => {
          e.preventDefault();
          checkSubmitValidation(e, inputs);
        },
        focusout: (e) => {
          e.preventDefault();
          checkFocusoutValidation(e, inputs);
        },
      },
    });

    super(tag, props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
