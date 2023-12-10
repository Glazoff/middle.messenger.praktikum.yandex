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

export type NewChat = {
  title: string,
};

export type LastMessage = {
  user: User,
  time: string,
  content: string
};

export type Chat = {
  id: number,
  title: string,
  avatar: string,
  unread_count: number,
  created_by: number,
  last_message: LastMessage,
};

export type Chats = Chat[];

export type AddUserChat = {
  users: number[],
  chatId: number,
};

export type Message = {
  chat_id: number,
  content: string,
  id: number,
  is_read: boolean,
  time: string,
  type: string,
  user_id: number,
};
