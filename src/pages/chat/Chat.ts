import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import ChatList from './ChatList';
import Messages from './Messages';
import template from './template';

export default class Chat extends Component {
  constructor(props: Props = {}) {
    props.chatList = new ChatList();

    props.messages = new Messages();

    props.attribute = {
      class: 'chat',
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
