import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import template from './template';

export default class Head extends Component {
  constructor(props: Props = {}) {
    props.attribute = {
      class: 'blok-profile__head',
    };

    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
