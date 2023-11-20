import Component from '../../../service/Component';
import { Props } from '../../../service/Component/types';
import Head from './Head';
import InputMessage from './InputMessage';
import MessageList from './MessageList';
import template from './template';

export default class Messages extends Component {
  constructor(props: Props = {}) {
    props.head = new Head();

    props.messageList = new MessageList();

    props.input = new InputMessage();

    props.attribute = {
      class: 'messages',
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
