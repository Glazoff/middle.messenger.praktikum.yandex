import Block from '../../components/Block';
import Form from '../../components/Form';
import Img from '../../components/Img';
import Title from '../../components/Title';
import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import Button from './components/Button';
import BaseButton from '../../components/Button';
import Head from './components/Head';
import Input from './components/Input';
import template from './template';
import img from '/img/Ellipse 17.svg';
import backImg from '/img/back.svg';
import router from '../../service/Router/Router';
import connect from '../../hocs/connect';
import { Indexed, User } from '../../types';
import ProfileController from '../../controllers/ProfileController';
import AuthController from '../../controllers/AuthController';
import hostResourse from '../../conts';

class Profile extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { user } = props as { user: User };
    const {
      email,
      first_name: firstName,
      login,
      second_name: secondName,
      display_name: displayName,
      phone,
      avatar,
    } = user;

    const inputs = [
      new Input({
        id: 'email', placeholder: 'Почта', type: 'email', value: email, name: 'email',
      }),
      new Input({
        id: 'login', placeholder: 'Логин', type: 'text', value: login, name: 'login',
      }),
      new Input({
        id: 'fname', placeholder: 'Имя', type: 'text', value: firstName, name: 'first_name',
      }),
      new Input({
        id: 'lname', placeholder: 'Фамилия', type: 'text', value: secondName, name: 'second_name',
      }),
      new Input({
        id: 'name_chat', placeholder: 'Имя в чате', type: 'text', value: displayName, name: 'display_name',
      }),
      new Input({
        id: 'tel', placeholder: 'Телефон', type: 'tel', value: phone, name: 'phone',
      }),
    ];

    props.inputs = inputs;

    const src = avatar ? `${hostResourse}${avatar}` : img;

    props.img = new Img({ attribute: { src, name: 'avatar', class: 'blok-profile__img' } });

    props.head = new Head({
      content: [
        new Block({
          content: props.img,
          attribute: { class: 'blok-profile__avatar' },
          events: {
            click: () => { router.go('/edit-avatar'); },
          },
        }),
        new Title({ text: displayName, attribute: { class: 'title' } }),
      ],
    });

    props.form = new Form({
      content: [
        new Block({
          content: inputs,
          attribute: {
            class: 'blok-profile__inputs',
          },
        }),

        new Block({
          content: [
            new Button({
              text: 'Изменить данные',
              events: {
                click: () => {
                  router.go('/edit-settings');
                },
              },
            }),
            new Button({
              text: 'Изменить пароль',
              events: {
                click: () => {
                  router.go('/edit-password');
                },
              },
            }),
            new Button({
              text: 'Выйти',
              red: true,
              events: {
                click: () => {
                  AuthController.logout();
                },
              },
            }),
          ],
          attribute: {
            class: 'blok-profile__buttons',
          },
        }),

      ],
      attribute: {
        class: 'blok-profile__form',
      },
    });

    props.backButton = new BaseButton({
      attribute: { class: 'back-button' },
      events: { click: () => { router.go('/messenger'); } },
      icon: new Img({ attribute: { src: backImg } }),
    });

    props.attribute = {
      class: 'blok-profile',
    };
    super(tag, props);
  }

  public componentDidMount() {
    ProfileController.getUser();
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

    this.children.head.lists.content.forEach((item) => {
      if (item instanceof Title) {
        item.setProps({ text: user.display_name });
      }
    });

    this.children.img.setProps({ attribute: { src: `${hostResourse}${user.avatar}` } });
  }

  render() {
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
      avatar: store.user.avatar,
    },
  };
}

export default connect(Profile, mapToProps);
