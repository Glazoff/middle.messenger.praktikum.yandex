import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import Clip from './components/Clip';
import Input from './components/Input';
import SubmitButton from './components/SubmitButton';
import template from './template';
import { checkSubmitValidation, checkFocusoutValidation } from '../../../../utils/checkValidation';
import ChatController from '../../../../controllers/ChatController';

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
        const input = document.querySelector('.input-message') as HTMLInputElement;
        const data = checkSubmitValidation(e, inputs);
        ChatController.sendMessage(data.message);
        input.value = '';
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
