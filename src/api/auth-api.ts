import BaseAPI from './base-api';
import Api from '../service/Api';
import { Password, SigninUser, SignupUser } from '../types';
import { hostRoot } from '../conts';

const HTTP = new Api(hostRoot);

class AuthAPI extends BaseAPI {
  singup(data: SignupUser) {
    return HTTP.post('/auth/signup', { data });
  }

  signin(data: SigninUser) {
    return HTTP.post('/auth/signin', { data });
  }

  getUser() {
    return HTTP.get('/auth/user');
  }

  logout() {
    return HTTP.post('/auth/logout');
  }

  changeProfile(data: SignupUser) {
    return HTTP.put('/user/profile', { data });
  }

  changePassword(data: Password) {
    return HTTP.put('/user/password', { data });
  }

  changeAvatar(data: typeof FormData) {
    return HTTP.put('/user/profile/avatar', { data });
  }
}

export default new AuthAPI();
