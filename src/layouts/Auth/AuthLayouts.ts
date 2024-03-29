import Component from '../../service/Component';
import { Props } from '../../service/Component/types';

import Title from '../../components/Title';
import Form from '../../components/Form';
import template from './template';
import Block from '../../components/Block';

export default class AuthLayouts extends Component {
  constructor(props: Props) {
    const { title, buttons, inputs } = props;

    props.title = new Title({ text: title, attribute: { class: 'title' } });

    props.form = new Form({
      content: [
        new Block({ content: inputs, attribute: { class: 'blok-auth__inputs' } }),
        new Block({ content: buttons, attribute: { class: 'blok-auth__buttons' } }),
      ],
    });

    props.attribute = {
      class: 'blok-auth',
    };

    super('div', props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
