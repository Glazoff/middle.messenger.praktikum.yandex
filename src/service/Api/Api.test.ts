import { expect } from 'chai';
import { createSandbox, SinonStub } from 'sinon';
import Api from './Api';
import queryStringify from '../../utils/queryStringify';

describe('API', () => {
  let api: Api;
  let request: SinonStub<any>;
  const sandbox = createSandbox();

  beforeEach(() => {
    api = new Api('');
    request = sandbox.stub(api, 'request' as keyof typeof api).callsFake(() => Promise.resolve());
  });

  it('проевод объекта в строку в методе get', () => {
    const data = { a: '1', d: '1' };
    const res = '?a=1&d=1';
    api.get('', { data });

    expect(queryStringify(data)).to.equal(res);
  });

  it('проверяем что получили ожидаемый метод put ', async () => {
    const data = { a: '123' };
    const headers = { 'Content-Type': 'application/json' };
    const timeout = 4000;
    await api.put(
      'https://ya-praktikum.tech/api/v2/test',
      { data, headers, timeout },
    );

    expect(request.args[0]).to.be.deep.equal([
      'https://ya-praktikum.tech/api/v2/test',
      {
        data, timeout, headers, method: 'PUT',
      },
      timeout,
    ]);
  });
});
