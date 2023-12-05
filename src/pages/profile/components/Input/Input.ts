import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import template from './template';

export default class Imput extends Component {
  constructor(props: Props = {}) {
    const { isValid = true, textError = '', isDisabled = true } = props;

    props.isValid = isValid;
    props.textError = textError;
    props.isDisabled = isDisabled;

    props.attribute = {
      class: 'input-profile-wrapper',
    };

    // todo подумать на будущее как хранить значения value в input как в сторе, чтобы не перезаписывать из ф-ий валидаторов
    // проблема: после обновления пропсов, шаблон перерендыривается и input пустой
    props.events = {
      input: (e) => {
        const input = e as InputEvent;
        props.value = input.data;
      },
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
