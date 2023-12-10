import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import ButtonProfile from './components/ButtonProfile';
import SearchInput from './components/SearchInput';
import template from './template';
import router from '../../../../service/Router/Router';
import Form from '../../../../components/Form';
import AddChat from './components/AddChat';
import Button from '../../../../components/Button';
import ChatController from '../../../../controllers/ChatController';

export default class Head extends Component {
  constructor(props: Props = {}) {
    props.buttonProfile = new ButtonProfile({
      events: {
        click: () => { router.go('/settings'); },
      },
    });
    props.searchInput = new SearchInput();

    props.formAddChats = new Form({
      content: [
        new AddChat({}),
        new Button({ text: 'Добавить чат', attribute: { class: 'button filled form-add-chat_button' } }),
      ],
      attribute: {
        class: 'chat-list__form-add-chat',
      },
      events: {
        submit: (e) => {
          e.preventDefault();
          const input = document.querySelector('#add-chat-input') as HTMLInputElement;
          if (input.value.length) {
            ChatController.addChats({ title: input.value })
              .then(() => {
                input.value = '';
              });
          }
        },
      },
    });

    props.attribute = {
      class: 'chat-list__head',
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
