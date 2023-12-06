import Block from '../../../../components/Block';
import Img from '../../../../components/Img';
import Title from '../../../../components/Title';
import hostResourse from '../../../../conts';
import connect from '../../../../hocs/connect';
import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import { Chat, Chats, Indexed } from '../../../../types';
import Ellipses from './Ellipses';
import template from './template';
import ellipseImg from '/img/Ellipse 17.svg';

const getCurrentChat = (id: number, chats: Chats): Chat | undefined => chats.find((item: Chat) => item.id === id);

type HeadType = {
  currentIdChat: number,
  listChat: Chats,
};

class Head extends Component {
  constructor(tag = 'div', props: Props = {}) {
    const { currentIdChat, listChat } = props as HeadType;
    const currentChat = getCurrentChat(currentIdChat, listChat);
    const { title, avatar } = currentChat as Chat;

    const src = avatar ? `${hostResourse}${avatar}` : ellipseImg;

    props.userInfo = new Block({
      content: [
        new Img({ attribute: { src, name: 'avatar', class: 'avatar' } }),
        new Title({ text: title, attribute: { class: 'user-name' } }),
      ],
      attribute: { class: 'user-profile' },
    });

    props.button = new Ellipses();

    props.attribute = {
      class: 'head-messages',
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
    listChat: store.listChat,
  };
}

export default connect(Head, mapToProps);
