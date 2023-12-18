import renderDOM from '../../utils/renderDOM';
import Component from '../Component';
import { Props } from '../Component/types';
import isEqual from './utils';

class Route {
  public pathname: string;

  private blockClass: typeof Component;

  private block: Component | null = null;

  private props: Props;

  constructor(pathname: string, view: typeof Component, props: Props) {
    this.pathname = pathname;
    this.blockClass = view;
    this.props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this.block) {
      this.block = null;
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      // eslint-disable-next-line new-cap
      this.block = new this.blockClass();
      renderDOM(this.props.rootQuery as string, this.block);
    }
  }
}

export default Route;
