import Block from '../../../../components/Block';
import Img from '../../../../components/Img';
import Title from '../../../../components/Title';
import hostResourse from '../../../../conts';
import connect from '../../../../hocs/connect';
import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import { Chat, Chats, Indexed } from '../../../../types';
import InputUser from './InputUser';
import template from './template';
import ellipseImg from '/img/Ellipse 17.svg';
import Form from '../../../../components/Form';
import Button from '../../../../components/Button';
import ChatController from '../../../../controllers/ChatController';

const getCurrentChat = (id: number, chats: Chats): Chat | undefined => chats.find((item: Chat) => item.id === id);

type HeadType = {
  currentIdChat: number,
  listChat: Chats,
};

class Head extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { currentIdChat, listChat } = props as HeadType;
    const currentChat = getCurrentChat(currentIdChat, listChat);
    const { title, avatar } = currentChat as Chat;

    const src = avatar ? `${hostResourse}${avatar}` : ellipseImg;

    props.userInfo = new Block({
      content: [
        new Img({ attribute: { src, name: 'avatar', class: 'avatar' } }),
        new Title({ text: title, attribute: { class: 'user-name' } }),
      ],
      attribute: { class: 'user-profile' },
    });

    props.buttonAddDelUser = new Form({
      content: [
        new InputUser(),
        new Button({ text: 'Добавить пользователя', attribute: { class: 'button filled form-add-del-user_button form-add-user' } }),
        new Button({ text: 'Удалить пользователя', attribute: { class: 'button filled form-add-del-user_button form-del-user' } }),
      ],
      attribute: {
        class: 'form-del-add-user',
      },
      events: {
        submit: (e) => {
          e.preventDefault();
          const event = e as SubmitEvent;
          const addButton = document.querySelector('.form-add-user');
          const delButton = document.querySelector('.form-del-user');
          const input = document.querySelector('.add-user-input') as HTMLInputElement;

          if (!input.value.length) return;

          const idUser = Number(input.value);
          const body = {
            users: [idUser],
            chatId: currentIdChat,
          };

          if (event.submitter === addButton) {
            ChatController.addUserChat(body);
          }

          if (event.submitter === delButton) {
            ChatController.delUserChat(body);
          }

          input.value = '';
        },
      },
    });

    props.attribute = {
      class: 'head-messages',
    };

    super(tag, props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

function mapToProps(store: Indexed) {
  return {
    currentIdChat: store.currentIdChat,
    listChat: store.listChat,
  };
}

export default connect(Head, mapToProps);
