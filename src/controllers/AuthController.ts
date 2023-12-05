import AuthAPI, { SignupUser, SigninUser, Password } from '../api/auth-api';
import router from '../service/Router/Router';
import store from '../service/Store';

class AuthController {
  public async signupUser(data: SignupUser) {
    try {
      await AuthAPI.singup(data);
      router.go('/messenger');
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async singin(data: SigninUser) {
    try {
      await AuthAPI.signin(data);
      router.go('/messenger');
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async logout() {
    try {
      await AuthAPI.logout();
      router.go('/');
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async getUser() {
    try {
      AuthAPI.getUser()
        .then((res) => store.set('user', JSON.parse(res.response)));
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async changeProfile(data: SignupUser) {
    try {
      AuthAPI.changeProfile(data)
        .then((res) => store.set('user', JSON.parse(res.response)));
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async changePassword(data: Password) {
    try {
      AuthAPI.changePassword(data);
    } catch (e) {
      throw Error(e as string);
    }
  }

  public async changeAvatar(data: typeof FormData) {
    try {
      AuthAPI.changeAvatar(data);
    } catch (e) {
      throw Error(e as string);
    }
  }
}

export default new AuthController();
