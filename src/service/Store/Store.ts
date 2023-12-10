import EventBus from '../EventBus';
import { Indexed } from '../../types';
import set from '../../utils/set';

export enum StoreEvents {
  Updated = 'updated',
}

class Store extends EventBus {
  private state: Indexed = {
    user: {
      email: '',
      first_name: '',
      login: '',
      second_name: '',
      display_name: '',
      phone: '',
      avatar: '',
      id: '',
    },
    listChat: [],
    currentIdChat: null,
    messagesList: [],
  };

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvents.Updated);
  }
}

export default new Store();
