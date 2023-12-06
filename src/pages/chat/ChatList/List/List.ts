import connect from '../../../../hocs/connect';
import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import { Indexed, User } from '../../../../types';
import ListItem from './ListItem';
import template from './template';

const NO_MESSAGE = 'У Вас еще нет активных чатов';

type Chat = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  created_by: number,
  last_message: {
    user: User,
    time: string,
    content: string
  }
};

type Chats = Chat[];

class List extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { chats } = props as { chats: Chats };

    // ChatController.addChats({ title: 'Новый чат' });

    props.listChat = chats.length !== 0 ? chats.map((chat) => new ListItem({ chat })) : [NO_MESSAGE];

    // props.listChat = [
    //   new ListItem(),
    //   new ListItem(),
    //   new ListItem(),
    // ];

    props.attribute = {
      class: 'chat-list__list',
    };

    super(tag, props);
  }

  public setProps(newProps: Props): void {
    super.setProps(newProps);
    const chats = newProps.chats as Chats;

    this.props.listChat = chats.length !== 0 ? chats.map((chat: Chat) => new ListItem({ chat })) : [NO_MESSAGE];
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

function mapToProps(store: Indexed) {
  return {
    chats: store.chats,
  };
}

export default connect(List, mapToProps);
