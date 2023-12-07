import ChatController from '../../../../controllers/ChatController';
import connect from '../../../../hocs/connect';
import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import Store from '../../../../service/Store';
import { Chat, Chats, Indexed } from '../../../../types';
import ListItem from './ListItem';
import template from './template';

const NO_MESSAGE = 'У Вас еще нет активных чатов';

class List extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { listChat } = props as { listChat: Chats };

    props.listChat = listChat.length !== 0 ? listChat.map((chat) => new ListItem({
      title: chat.title,
      avatar: chat.avatar,
      unread_count: chat.unread_count,
      last_message: chat.last_message,
      events: {
        click: () => {
          ChatController.dicsonnectChat();
          Store.set('currentIdChat', chat.id);
        },
      },
    })) : [NO_MESSAGE];

    props.attribute = {
      class: 'chat-list__list',
    };

    super(tag, props);
  }

  public setProps(newProps: Props): void {
    const { listChat } = newProps as { listChat: Chats };

    newProps.listChat = listChat.length !== 0 ? listChat.map((chat: Chat) => new ListItem({
      title: chat.title,
      avatar: chat.avatar,
      unread_count: chat.unread_count,
      last_message: chat.last_message,
      events: {
        click: () => {
          ChatController.dicsonnectChat();
          Store.set('currentIdChat', chat.id);
        },
      },
    })) : [NO_MESSAGE];

    super.setProps(newProps);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

function mapToProps(store: Indexed) {
  return {
    listChat: store.listChat,
  };
}

export default connect(List, mapToProps);
