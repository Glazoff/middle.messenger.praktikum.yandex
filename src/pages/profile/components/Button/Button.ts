import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import template from './template';

export default class Button extends Component {
  constructor(props: Props = {}) {
    const { red } = props;

    props.attribute = {
      class: `button_profile ${red ? 'red' : ''}`,
    };

    super('button', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
