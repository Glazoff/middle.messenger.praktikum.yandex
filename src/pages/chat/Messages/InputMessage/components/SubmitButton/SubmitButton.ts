import Img from '../../../../../../components/Img';
import Component from '../../../../../../service/Component';
import { Props } from '../../../../../../service/Component/types';
import buttonSubmit from '/img/button-submit.svg';

export default class SubmitButton extends Component {
  constructor(props: Props = {}) {
    props.img = new Img({ attribute: { src: buttonSubmit } });

    props.attribute = {
      class: 'submit-button',
    };
    super('button', props);
  }

  public render(): DocumentFragment {
    return this.compile('{{{ img }}}', this.props);
  }
}
