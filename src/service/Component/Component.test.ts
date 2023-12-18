import { expect } from 'chai';
import sinon from 'sinon';
import Component from './Component';

class FakeComponent extends Component {
  public compile() {
    return new global.DocumentFragment();
  }

  public render() {
    return this.compile();
  }
}

describe('Block', () => {
  let block: Component;

  beforeEach(() => {
    block = new FakeComponent();
  });

  it('проверка на установленые пропсы', () => {
    block.setProps({ name: 'Иван' });

    expect('name' in block.props).to.be.deep.equal('name' in block.props);
  });

  it('проверка метода render()', () => {
    const spy = sinon.spy(block, 'render');
    block.render();

    expect(spy.callCount).to.equal(1);
  });
});
