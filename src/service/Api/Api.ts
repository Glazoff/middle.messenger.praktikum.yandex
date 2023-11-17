import { Options } from "./types";
import {queryStringify} from '../../utils/queryStringify';
import { METHODS } from "./const";

export class Api{

    get = (url: string, options: Options) => {
             
            return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    post = (url: string, options: Options) => {
            return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url: string, options: Options) => {
            return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url: string, options: Options) => { 
            return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url: string, options: Options, timeout = 5000) => {
            const {headers = {}, method, data} = options;

            return new Promise(function(resolve, reject) {
                    if (!method) {
                            reject('No method');
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

                    Object.keys(headers).forEach(key => {
                            xhr.setRequestHeader(key, headers[key]);
                    });
            
                xhr.onload = function() {
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
