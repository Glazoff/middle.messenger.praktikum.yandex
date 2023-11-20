import METHODS from './const';

export type Data = Document | XMLHttpRequestBodyInit | null | undefined;

export type Options = {
  timeout: number,
  headers: Record<string, string>,
  data: Data,
  method: METHODS,
};

export type ApiMethod = (url: string, options: Options) => Promise<unknown>;

export type ApiRequest = (url: string, options: Options, timeout: number) => Promise<unknown>;
