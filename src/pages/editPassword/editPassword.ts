import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import template from './template';
import Input from '../profile/components/Input';
import Img from '../../components/Img';
import img from '/img/Ellipse 17.svg';
import Form from '../../components/Form';
import Block from '../../components/Block';
import Button from '../../components/Button';
import { checkFocusoutValidation, checkSubmitValidation } from '../../utils/checkValidation';
import AuthController from '../../controllers/AuthController';
import router from '../../service/Router/Router';
import { Password } from '../../api/auth-api';
import backImg from '/img/back.svg';

class EditPassword extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const inputs = [
      new Input({
        id: 'password', placeholder: 'Старый пароль', type: 'password', value: '', name: 'oldPassword', isDisabled: false,
      }),
      new Input({
        id: 'new_password', placeholder: 'Новый пароль', type: 'password', value: '', name: 'newPassword', isDisabled: false,
      }),
      new Input({
        id: 'repace_new_password', placeholder: 'Повторите новый пароль', type: 'password', value: '', isDisabled: false,
      }),
    ];

    props.inputs = inputs;

    props.img = new Img({ attribute: { src: img, name: 'avatar' } });

    props.form = new Form({
      content: [
        new Block({
          content: inputs,
          attribute: {
            class: 'blok-edit-password__inputs',
          },
        }),

        new Block({
          content: [
            new Button({
              text: 'Сохранить',
              attribute: {
                class: 'blok-edit-password__button button filled',
              },
            }),
          ],
        }),

      ],
      events: {
        submit: (e) => {
          e.preventDefault();
          const data = checkSubmitValidation(e, inputs);
          AuthController.changePassword(data as Password)
            .then(() => { router.go('/settings'); });
        },
        focusout: (e) => {
          e.preventDefault();
          checkFocusoutValidation(e, inputs);
        },
      },
      attribute: {
        class: 'blok-edit-password__form',
      },
    });

    props.backButton = new Button({
      attribute: { class: 'back-button' },
      events: { click: () => { router.go('/settings'); } },
      icon: new Img({ attribute: { src: backImg } }),
    });

    props.attribute = {
      class: 'blok-edit-password',
    };

    super(tag, props);
  }

  public render() {
    return this.compile(template, this.props);
  }
}

export default EditPassword;
