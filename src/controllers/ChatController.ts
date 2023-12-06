import ChatAPI from '../api/chat-api';
import store from '../service/Store';
import { NewChat } from '../types';

class ChatController {
  public getChats() {
    ChatAPI.getChats()
      .then((res) => store.set('listChat', JSON.parse(res.response)));
  }

  public async addChats(data: NewChat) {
    await ChatAPI.addChat(data);
    this.getChats();
  }
}

export default new ChatController();
