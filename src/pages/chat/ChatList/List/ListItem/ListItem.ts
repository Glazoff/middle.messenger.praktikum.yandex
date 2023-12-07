import Block from '../../../../../components/Block';
import Img from '../../../../../components/Img';
import Textarea from '../../../../../components/Textarea';
import Title from '../../../../../components/Title';
import hostResourse from '../../../../../conts';
import Component from '../../../../../service/Component';
import { Props } from '../../../../../service/Component/types';
import { Chat } from '../../../../../types';
import CountUnread from './component';
import template from './template';
import ellipseImg from '/img/Ellipse 17.svg';

export default class ListItem extends Component {
  constructor(props: Props = {}) {
    const {
      title,
      avatar,
      unread_count: unreadCount,
      last_message: lastMessage = null,
    } = props as Chat;

    const src = avatar ? `${hostResourse}${avatar}` : ellipseImg;

    props.img = new Img({ attribute: { src, name: 'avatar', class: 'avatar' } });

    props.infoMessage = new Block({
      content: [
        new Title({ text: title, attribute: { class: 'user-name' } }),
        new Textarea({ text: lastMessage && lastMessage.content, attribute: { class: 'message' } }),
      ],
    });

    props.time = new Textarea({ text: lastMessage && lastMessage.time, attribute: { class: 'time' } });

    props.countUnread = unreadCount ? new CountUnread({ count: unreadCount }) : '';

    props.attribute = {
      class: 'lsit-item',
    };
    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
