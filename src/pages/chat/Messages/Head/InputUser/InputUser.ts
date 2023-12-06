import Component from '../../../../../service/Component';
import { Props } from '../../../../../service/Component/types';
import template from './template';

export default class InputUser extends Component {
  constructor(props: Props = {}) {
    props.id = 'add-user-input';
    props.classInput = 'add-user-input';
    props.classLabel = 'add-user-label';
    props.placeholder = 'введите id пользователя';

    props.attribute = {
      class: 'message__add-user-input',
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
