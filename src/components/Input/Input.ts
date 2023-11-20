import Component from '../../service/Component';
import { Props } from '../../service/Component/types';
import template from './template';

export default class Input extends Component {
  constructor(props: Props) {
    const { isValid = true, textError = '' } = props;

    props.isValid = isValid;
    props.textError = textError;

    props.attribute = {
      class: 'input-wrapper',
    };

    props.value = '';

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

  render() {
    return this.compile(template, this.props);
  }
}
