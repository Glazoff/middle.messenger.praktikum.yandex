import BaseAPI from './base-api';
import Api from '../service/Api';
import { NewChat } from '../types';

const HTTP = new Api('https://ya-praktikum.tech/api/v2');

class ChatAPI extends BaseAPI {
  getChats() {
    return HTTP.get('/chats');
  }

  addChat(data: NewChat) {
    return HTTP.post('/chats', { data });
  }
}

export default new ChatAPI();
