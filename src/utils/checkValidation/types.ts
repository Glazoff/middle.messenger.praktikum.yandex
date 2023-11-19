export type InputRes = {
  value: string,
  isValid: boolean,
  errorText: string,
};

export type Res = Record<string, InputRes>;
