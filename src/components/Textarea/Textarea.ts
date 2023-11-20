import Component from '../../service/Component';
import { Props } from '../../service/Component/types';

export default class Textarea extends Component {
  constructor(props: Props) {
    super('p', props);
  }

  public render(): DocumentFragment {
    return this.compile('{{ text }}', this.props);
  }
}
