import ChatController from '../../controllers/ChatController';
import ProfileController from '../../controllers/ProfileController';
import connect from '../../hocs/connect';
import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import { Indexed } from '../../types';
import ChatList from './ChatList';
import Messages from './Messages';
import template from './template';

class Chat extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { currentIdChat } = props;
    props.chatList = new ChatList();

    props.messages = currentIdChat ? new Messages() : 'Выберите чат чтобы отправить сообщение';

    props.attribute = {
      class: 'chat',
    };

    super(tag, props);
  }

  public componentDidMount(): void {
    ProfileController.getUser();
    ChatController.getChats();
  }

  public setProps(newProps: Props): void {
    newProps.messages = newProps.currentIdChat ? new Messages() : 'Выберите чат чтобы отправить сообщение';

    super.setProps(newProps);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

function mapToProps(store: Indexed) {
  return {
    currentIdChat: store.currentChat,
  };
}

export default connect(Chat, mapToProps);
