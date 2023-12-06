import BaseAPI from './base-api';
import Api from '../service/Api';
import { AddUserChat, NewChat } from '../types';

const HTTP = new Api('https://ya-praktikum.tech/api/v2');

class ChatAPI extends BaseAPI {
  getChats() {
    return HTTP.get('/chats');
  }

  addChat(data: NewChat) {
    return HTTP.post('/chats', { data });
  }

  addUserChat(data: AddUserChat) {
    return HTTP.put('/chats/users', { data });
  }

  delUserChat(data: AddUserChat) {
    return HTTP.delete('/chats/users', { data });
  }

  getTokenForChat(id: number) {
    return HTTP.post(`/chats/token/${id}`);
  }
}

export default new ChatAPI();
