import ProfileAPI from '../api/profile-api';
import store from '../service/Store';
import { Password, SignupUser } from '../types';

class ProfileController {
  public async getUser() {
    try {
      ProfileAPI.getUser()
        .then((res) => store.set('user', JSON.parse(res.response)));
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async changeProfile(data: SignupUser) {
    try {
      ProfileAPI.changeProfile(data)
        .then((res) => store.set('user', JSON.parse(res.response)));
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async changePassword(data: Password) {
    try {
      ProfileAPI.changePassword(data);
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async changeAvatar(data: typeof FormData) {
    try {
      ProfileAPI.changeAvatar(data);
    } catch (e) {
      throw Error(e as string);
    }
  }
}

export default new ProfileController();
