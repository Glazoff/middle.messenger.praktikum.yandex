import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import AuthLayouts from '../../layouts/Auth';
import template from './template';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { checkSubmitValidation, checkFocusoutValidation } from '../../utils/checkValidation';
import router from '../../service/Router/Router';
import AuthController from '../../controllers/AuthController';
import { SigninUser } from '../../types';

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
          const data = checkSubmitValidation(e, inputs);
          AuthController.singin(data as SigninUser);
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
