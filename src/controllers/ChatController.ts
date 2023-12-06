import ChatAPI from '../api/chat-api';
import store from '../service/Store';
import { NewChat } from '../types';

class ChatController {
  public getChats() {
    ChatAPI.getChats()
      .then((res) => store.set('chats', JSON.parse(res.response)));
  }

  public addChats(data: NewChat) {
    ChatAPI.addChat(data);
  }
}

export default new ChatController();
