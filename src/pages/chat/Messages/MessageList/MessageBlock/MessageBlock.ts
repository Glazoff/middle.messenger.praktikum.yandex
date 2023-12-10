import Textarea from '../../../../../components/Textarea';
import Component from '../../../../../service/Component';
import { Props } from '../../../../../service/Component/types';
import template from './template';

export default class MessageBlock extends Component {
  constructor(props: Props = {}) {
    const { isMe, text, time } = props;

    props.text = new Textarea({ text });

    const fixTime = new Date(time as string);
    const hours = fixTime?.getHours();
    const min = fixTime?.getMinutes();

    props.time = new Textarea({ text: time && `${hours}:${min}`, attribute: { class: 'time' } });

    props.attribute = {
      class: `message-block ${isMe ? 'message-block-me' : 'message-block-its'}`,
    };
    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
