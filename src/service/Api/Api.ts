import { ApiMethod, OptionsRequest } from './types';
import queryStringify from '../../utils/queryStringify';
import METHODS from './const';

export default class Api {
  public baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get: ApiMethod = (url, options) => this.request(this.baseUrl + url, { ...options, method: METHODS.GET }, options && options.timeout);

  post: ApiMethod = (url, options) => this.request(this.baseUrl + url, { ...options, method: METHODS.POST }, options && options.timeout);

  put: ApiMethod = (url, options) => this.request(this.baseUrl + url, { ...options, method: METHODS.PUT }, options && options.timeout);

  // eslint-disable-next-line max-len
  delete: ApiMethod = (url, options) => this.request(this.baseUrl + url, { ...options, method: METHODS.DELETE }, options && options.timeout);

  request = (url: string, options: OptionsRequest, timeout = 5000): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data = {} } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data as string | Record<string, string>)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      // eslint-disable-next-line func-names
      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      xhr.withCredentials = true;

      if (isGet || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
