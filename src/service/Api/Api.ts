import { ApiMethod, ApiRequest } from './types';
import queryStringify from '../../utils/queryStringify';
import METHODS from './const';

export default class Api {
  get: ApiMethod = (url, options) => this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  post: ApiMethod = (url, options) => this.request(url, { ...options, method: METHODS.POST }, options.timeout);

  put: ApiMethod = (url, options) => this.request(url, { ...options, method: METHODS.PUT }, options.timeout);

  delete: ApiMethod = (url, options) => this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);

  request: ApiRequest = (url, options, timeout = 5000) => {
    const { headers = {}, method, data } = options;

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

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
