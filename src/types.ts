export type Indexed<T = any> = { [key in string]: T; };

export type Password = {
  oldPassword: string,
  newPassword: string,
};

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
  avatar: string,
};
