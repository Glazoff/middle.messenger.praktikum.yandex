import Component from '../../service/Component';
import { Props } from '../../service/Component/types';

export default class InputAvatar extends Component {
  constructor(props: Props) {
    super('div', props);
  }

  render() {
    return this.compile('<input type="file" id="avatar" name="avatar" accept="image/*"/>', this.props);
  }
}
