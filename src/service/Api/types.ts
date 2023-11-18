import METHODS from './const';

export type Data = Document | XMLHttpRequestBodyInit | null | undefined;

export type Options = {
  timeout: number,
  headers: Record<string, string>,
  data: Data,
  method: METHODS,
};
