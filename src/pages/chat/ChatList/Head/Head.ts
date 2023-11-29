import Component from '../../../../service/Component';
import { Props } from '../../../../service/Component/types';
import ButtonProfile from './components/ButtonProfile';
import SearchInput from './components/SearchInput';
import template from './template';
import router from '../../../../service/Router/Router';

export default class Head extends Component {
  constructor(props: Props = {}) {
    props.buttonProfile = new ButtonProfile({
      events: {
        click: () => { router.go('/settings'); },
      },
    });
    props.searchInput = new SearchInput();

    props.attribute = {
      class: 'chat-list__head',
    };

    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
