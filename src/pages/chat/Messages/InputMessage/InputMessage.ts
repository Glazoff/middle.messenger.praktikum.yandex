import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import Clip from './components/Clip';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';
import template from './template';
import { checkSubmitValidation, checkFocusoutValidation } from '../../../../utils/checkValidation';

const inputs = [new Input({ name: 'message' })];

export default class InputMessage extends Component {
  constructor(props: Props = {}) {
    props.submitButton = new SubmitButton();

    props.input = inputs;

    props.attachButton = new Clip();

    props.attribute = {
      class: 'block-input-message',
    };

    props.events = {
      submit: (e) => {
        e.preventDefault();
        checkSubmitValidation(e, inputs);
      },
      focusout: (e) => {
        e.preventDefault();
        checkFocusoutValidation(e, inputs);
      },
    };

    super('form', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
