import Img from '../../../../../../components/Img';
import Component from '../../../../../../service/Component';
import { Props } from '../../../../../../service/Component/types';
import template from './template';
import glassImg from '/img/Glass.svg';

export default class SearchInput extends Component {
  constructor(props: Props = {}) {
    props.id = 'search-input';
    props.classInput = 'search-input';
    props.classLabel = 'search-label';
    props.placeholder = 'Поиск';

    props.img = new Img({ attribute: { src: glassImg, class: 'glass' } });

    props.attribute = {
      class: 'chat-list__search-input',
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
