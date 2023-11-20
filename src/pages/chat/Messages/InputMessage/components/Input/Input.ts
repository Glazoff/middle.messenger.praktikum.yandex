import Component from '../../../../../../service/Component';
import { Props } from '../../../../../../service/Component/types';

export default class Input extends Component {
  constructor(props: Props = {}) {
    props.attribute = {
      class: 'input-message',
      name: 'message',
      placeholder: 'Сообщение',
    };

    super('input', props);
  }

  public render(): DocumentFragment {
    return this.compile('', this.props);
  }
}
