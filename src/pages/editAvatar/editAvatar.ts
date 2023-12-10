import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import Form from '../../components/Form';
import Title from '../../components/Title';
import template from './template';
import Block from '../../components/Block';
import InputAvatar from './inputAvatar';
import Button from '../../components/Button';
import router from '../../service/Router/Router';
import ProfileController from '../../controllers/ProfileController';

export default class EditAvatar extends Component {
  constructor(tag = 'div', props: Props = {}) {
    props.title = new Title({ text: 'Загрузите файл', attribute: { class: 'blok-edit-avatar__title' } });

    const input = [new InputAvatar({})];
    props.input = input;

    props.form = new Form({
      content: [
        new Block({
          content: props.input,
          attribute: {
            class: 'blok-profile__inputs',
          },
        }),

        new Block({
          content: [
            new Button({
              text: 'Поменять',
              attribute: {
                class: 'blok-edit-avatar__button button filled',
              },
            }),
          ],
        }),
      ],

      events: {
        submit: (e) => {
          e.preventDefault();

          const data = new FormData(e.target as HTMLFormElement);
          ProfileController.changeAvatar(data as unknown as typeof FormData)
            .then(() => router.go('/settings'));
        },
      },

      attribute: {
        class: 'blok-edit-avatar__form',
      },
    });

    props.backButton = new Button({
      text: 'Назад',
      attribute: {
        class: 'blok-edit-avatar__button button',
      },
      events: {
        click: () => {
          router.go('/settings');
        },
      },
    });

    props.attribute = {
      class: 'blok-edit-avatar',
    };
    super(tag, props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
