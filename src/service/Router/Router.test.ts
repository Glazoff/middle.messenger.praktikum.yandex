import { expect } from 'chai';
import sinon from 'sinon';
import Router from './Router';
import Component from '../Component';

class FakeBlock {
  static render: any;

  getContent() {
    return document.createElement('div');
  }

  dispatchComponentDidMount() {
    this.render();
  }

  render() {
    return this.getContent();
  }
}

describe('Route', () => {
  const router = Router;
  const block = FakeBlock;

  it('проверяем метод use', () => {
    router.use('/', block as unknown as typeof Component);
    expect(router.routes).to.equal(router.routes);
  });

  it('проверяем старт роутинга', () => {
    const spy = sinon.spy(router, 'start');

    router
      .use('/', block as unknown as typeof Component)
      .start();

    expect(spy.callCount).to.equal(1);
  });

  it('проверка метода go()', () => {
    router.go('/test');

    expect(global.window.location.pathname).to.equal('/test');
  });

  it('проверка метода getRoute()', () => {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    expect(router.getRoute('/')).to.equal(router.routes.find((block) => block.pathname === '/'));
  });
});
