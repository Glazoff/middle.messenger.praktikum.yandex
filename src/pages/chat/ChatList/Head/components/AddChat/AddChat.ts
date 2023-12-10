import Component from '../../../../../../service/Component';
import { Props } from '../../../../../../service/Component/types';
import template from './template';

export default class AddChat extends Component {
  constructor(props: Props = {}) {
    props.id = 'add-chat-input';
    props.classInput = 'add-chat-input';
    props.classLabel = 'add-chat-label';
    props.placeholder = 'введите id чата';

    props.attribute = {
      class: 'chat-list__add-chat-input',
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
