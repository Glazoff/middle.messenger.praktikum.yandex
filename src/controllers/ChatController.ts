import ChatAPI from '../api/chat-api';
import store from '../service/Store';
import { AddUserChat, NewChat } from '../types';

class ChatController {
  public getChats() {
    ChatAPI.getChats()
      .then((res) => store.set('listChat', JSON.parse(res.response)));
  }

  public async addChats(data: NewChat) {
    await ChatAPI.addChat(data);
    this.getChats();
  }

  public async addUserChat(data: AddUserChat) {
    await ChatAPI.addUserChat(data);
  }

  public async delUserChat(data: AddUserChat) {
    await ChatAPI.delUserChat(data);
  }
}
export default new ChatController();
