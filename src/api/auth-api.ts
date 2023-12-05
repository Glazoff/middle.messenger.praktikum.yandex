import BaseAPI from './base-api';
import Api from '../service/Api';

const HTTP = new Api('https://ya-praktikum.tech/api/v2');

export type SignupUser = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string
};

export type SigninUser = {
  login: string,
  password: string,
};

export type User = {
  first_name: string,
  second_name: string,
  login: string,
  email: string,
  password: string,
  phone: string,
  display_name: string,
  id: number,
};

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
}

export default new AuthAPI();
