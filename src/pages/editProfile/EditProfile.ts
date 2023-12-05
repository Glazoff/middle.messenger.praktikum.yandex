import { SignupUser, User } from '../../api/auth-api';
import Block from '../../components/Block';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Img from '../../components/Img';
import connect from '../../hocs/connect';
import AuthController from '../../controllers/AuthController';
import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import { Indexed } from '../../types';
import { checkFocusoutValidation, checkSubmitValidation } from '../../utils/checkValidation';
import Input from '../profile/components/Input';
import template from './template';
import img from '/img/Ellipse 17.svg';
import backImg from '/img/back.svg';
import router from '../../service/Router/Router';

class EditProfile extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { user } = props as { user: User };
    const {
      email,
      first_name: firstName,
      login,
      second_name: secondName,
      display_name: displayName,
      phone,
    } = user;

    const inputs = [
      new Input({
        id: 'email', placeholder: 'Почта', type: 'email', value: email, name: 'email', isDisabled: false,
      }),
      new Input({
        id: 'login', placeholder: 'Логин', type: 'text', value: login, name: 'login', isDisabled: false,
      }),
      new Input({
        id: 'fname', placeholder: 'Имя', type: 'text', value: firstName, name: 'first_name', isDisabled: false,
      }),
      new Input({
        id: 'lname', placeholder: 'Фамилия', type: 'text', value: secondName, name: 'second_name', isDisabled: false,
      }),
      new Input({
        id: 'name_chat', placeholder: 'Имя в чате', type: 'text', value: displayName, name: 'display_name', isDisabled: false,
      }),
      new Input({
        id: 'tel', placeholder: 'Телефон', type: 'tel', value: phone, name: 'phone', isDisabled: false,
      }),
    ];

    props.inputs = inputs;

    props.img = new Img({ attribute: { src: img, name: 'avatar' } });

    props.form = new Form({
      content: [
        new Block({
          content: inputs,
          attribute: {
            class: 'blok-edit-profile__inputs',
          },
        }),

        new Block({
          content: [
            new Button({
              text: 'Сохранить',
              attribute: {
                class: 'blok-edit-profile__button button filled',
              },
            }),
          ],
        }),

      ],
      events: {
        submit: (e) => {
          e.preventDefault();
          const data = checkSubmitValidation(e, inputs);
          AuthController.changeProfile(data as SignupUser)
            .then(() => { router.go('/settings'); });
        },
        focusout: (e) => {
          e.preventDefault();
          checkFocusoutValidation(e, inputs);
        },
      },
      attribute: {
        class: 'blok-edit-profile__form',
      },
    });

    props.attribute = {
      class: 'blok-edit-profile',
    };

    props.backButton = new Button({
      attribute: { class: 'back-button' },
      events: { click: () => { router.go('/settings'); } },
      icon: new Img({ attribute: { src: backImg } }),
    });

    super(tag, props);
  }

  public componentDidMount() {
    AuthController.getUser();
  }

  setProps(newProps: Props) {
    super.setProps(newProps);
    const user = this.props.user as User;

    this.lists.inputs.forEach((i) => {
      if (i instanceof Input) {
        const input = i as Input;
        const name = input.props.name as string;

        if (name in user) {
          input.setProps({ value: user[name as keyof User] });
        }
      }
    });
  }

  public render() {
    return this.compile(template, this.props);
  }
}
function mapToProps(store: Indexed) {
  return {
    user: {
      email: store.user.email,
      first_name: store.user.first_name,
      login: store.user.login,
      second_name: store.user.second_name,
      display_name: store.user.display_name,
      phone: store.user.phone,
    },
  };
}

export default connect(EditProfile, mapToProps);
