import ChatAPI from '../api/chat-api';
import store from '../service/Store';
import WsServise from '../service/WsServise';
import { Event } from '../service/WsServise/WsServise';
import { AddUserChat, Message, NewChat } from '../types';

const hostWs = 'wss://ya-praktikum.tech/ws/chats';

class ChatController {
  private socket: WsServise | null;

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

  public clearMessages() {
    store.set('messagesList', []);
  }

  public setMessages(data: Message | Message[]) {
    const list = store.getState().messagesList;

    if (Array.isArray(data)) {
      const newList = list.concat(data);
      store.set('messagesList', [...newList]);
      console.log('store...', store.getState());
      return;
    }

    list.push(data);
    store.set('messagesList', list);
    console.log('store...', store.getState());
  }

  public async connectChat(idUser: number, idChat: number) {
    try {
      const res = JSON.parse((await ChatAPI.getTokenForChat(idChat)).response);
      this.socket = new WsServise(`${hostWs}/${idUser}/${idChat}/${res.token}`);

      this.socket.on(Event.Connected, () => {
        this.socket?.on(Event.Message, this.setMessages);
        this.getMessagesChats();
      });

      await this.socket.connect();
    } catch (e) {
      throw Error(e as string);
    }
  }

  public dicsonnectChat() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  public sendMessage(text: string) {
    if (this.socket) {
      const data = {
        type: 'message',
        content: text,
      };

      this.socket.send(data);
    }
  }

  public getMessagesChats() {
    if (this.socket) {
      this.socket.send({
        type: 'get old',
        content: 0,
      });
    }
  }
}
export default new ChatController();
