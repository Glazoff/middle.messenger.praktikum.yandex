import ChatAPI from '../api/chat-api';
import store from '../service/Store';
import WsServise from '../service/WsServise';
import { AddUserChat, NewChat } from '../types';

const hostWs = 'wss://ya-praktikum.tech/ws/chats';

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

  public async connectChat(idUser: number, idChat: number) {
    try {
      const res = JSON.parse((await ChatAPI.getTokenForChat(idChat)).response);
      const socket = new WsServise(`${hostWs}/${idUser}/${idChat}/${res.token}`);
      console.log('socket', `${hostWs}/${idUser}/${idChat}/${res.token}`);
      socket.connect();
      setTimeout(() => socket.send('Hello world!'), 5000);
    } catch (e) {
      throw Error(e as string);
    }
  }
}
export default new ChatController();
