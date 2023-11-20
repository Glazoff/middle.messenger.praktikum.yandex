import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import template from './template';

import Error from '../../layouts/Error';

export default class Page500 extends Component {
  constructor(tag = 'div', props: Props = {}) {
    props.error = new Error('div', {
      title: '500',
      info: 'Мы уже фиксим',
      buttonText: 'Назад к чатам',
    });

    super(tag, props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
