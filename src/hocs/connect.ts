import Component from '../service/Component';
import { Props } from '../service/Component/types';
import store, { StoreEvents } from '../service/Store/Store';

function connect(
  Block: typeof Component,
  mapToProps: (state: Props) => Props,
): typeof Component {
  return class extends Block {
    constructor(tag: string, props: Props = {}) {
      super(tag, { ...props, ...mapToProps(store.getState()) });

      store.on(StoreEvents.Updated, () => {
        this.setProps({ ...store.getState() });
      });
    }
  };
}

export default connect;
