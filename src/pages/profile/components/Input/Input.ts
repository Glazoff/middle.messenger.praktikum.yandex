import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import template from './template';

export default class Imput extends Component {
  constructor(props: Props = {}) {
    props.attribute = {
      class: 'input-profile-wrapper',
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
