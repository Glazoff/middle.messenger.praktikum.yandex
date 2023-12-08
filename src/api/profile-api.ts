import BaseAPI from './base-api';
import Api from '../service/Api';
import { Password, SignupUser } from '../types';
import { hostRoot } from '../conts';

const HTTP = new Api(hostRoot);

class ProfileAPI extends BaseAPI {
  getUser() {
    return HTTP.get('/auth/user');
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

export default new ProfileAPI();
