import METHODS from './const';

export type Data = unknown;

export type Options = {
  timeout?: number,
  headers?: Record<string, string>,
  data?: Data,
};

export type OptionsRequest = {
  headers?: Record<string, string>,
  data?: Data,
  method: METHODS,
};

export type ApiMethod = (url: string, options?: Options) => Promise<XMLHttpRequest>;
