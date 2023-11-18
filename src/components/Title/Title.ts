import Component from '../../service/Component';
import { Props } from '../../service/Component/types';

export default class Title extends Component {
  constructor(props: Props) {
    super('h1', props);
  }

  render() {
    return this.compile('{{ text }}', this.props);
  }
}
