/* eslint-disable max-len */
import connect from '../../../../hocs/connect';
import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import { Indexed, Message } from '../../../../types';
import MessageBlock from './MessageBlock';
import template from './template';

class MessageList extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { messagesList, userId } = props as { messagesList: [] | Message[], userId: number };

    props.content = messagesList.length !== 0 ? messagesList.map((message: Message) => new MessageBlock({
      isMe: message.user_id !== userId,
      time: message.time,
      text: message.content,
    })) : ['Сообщений нет'];

    props.attribute = {
      class: 'message-list',
    };
    super(tag, props);
  }

  public setProps(newProps: Props): void {
    const { messagesList, userId } = newProps as { messagesList: [] | Message[], userId: number };

    newProps.content = messagesList.length !== 0 ? messagesList.map((message: Message) => new MessageBlock({
      isMe: message.user_id !== userId,
      time: message.time,
      text: message.content,
    })) : ['Сообщений нет'];

    super.setProps(newProps);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

function mapToProps(store: Indexed) {
  return {
    userId: store.user.id,
    messagesList: store.messagesList,
  };
}

export default connect(MessageList, mapToProps);
