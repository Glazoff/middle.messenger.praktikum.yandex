import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import ChatList from './ChatList';
import Messages from './Messages';
import template from './template';

export default class Chat extends Component {
  constructor(tag = 'div', props: Props = {}) {
    props.chatList = new ChatList();

    props.messages = new Messages();

    props.attribute = {
      class: 'chat',
    };

    super(tag, props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
