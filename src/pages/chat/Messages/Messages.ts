import ChatController from '../../../controllers/ChatController';
import connect from '../../../hocs/connect';
import Component from '../../../service/Component';
import { Props } from '../../../service/Component/types';
import { Indexed } from '../../../types';
import Head from './Head';
import InputMessage from './InputMessage';
import MessageList from './MessageList';
import template from './template';

type MessageProps = {
  userId: number,
  currentIdChat: number,
};

class Messages extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { userId, currentIdChat } = props as MessageProps;
    ChatController.connectChat(userId, currentIdChat);

    props.head = new Head();

    props.messageList = new MessageList();

    props.input = new InputMessage();

    props.attribute = {
      class: 'messages',
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
    userId: store.user.id,
  };
}

export default connect(Messages, mapToProps);
