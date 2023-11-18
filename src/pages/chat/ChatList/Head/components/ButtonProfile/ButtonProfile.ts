import Button from '../../../../../../components/Button';
import Component from '../../../../../../service/Component';
import { Props } from '../../../../../../service/Component/types';
import template from './template';

export default class ButtonProfile extends Component {
  constructor(props: Props = {}) {
    props.buttonProfile = new Button({ text: 'Профиль', attribute: { class: 'button-profile' } });

    props.attribute = {
      class: 'wrapper-button-profile',
    };
    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
