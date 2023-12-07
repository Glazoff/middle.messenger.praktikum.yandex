import ProfileController from '../../controllers/ProfileController';
import Component from '../Component';
import Route from './Route';

class Router {
  static instance: Router;

  public routes: Array<Route> = [];

  public history: History;

  private currentRoute: null | Route = null;

  private rootQuery: string | null = null;

  constructor(rootQuery: string) {
    if (Router.instance) {
      // eslint-disable-next-line no-constructor-return
      return Router.instance;
    }

    this.history = window.history;
    this.rootQuery = rootQuery;

    Router.instance = this;
  }

  public async checkAuth() {
    const res = await ProfileController.checkAuth();
    if (res === 200) {
      this.go('/messenger');
    } else {
      this.go('/');
    }
  }

  public use(pathname: string, block: typeof Component) {
    const route = new Route(pathname, block, { rootQuery: this.rootQuery });

    this.routes.push(route);

    return this;
  }

  public start() {
    window.addEventListener('popstate', (event: PopStateEvent) => {
      const w = event.target as Window;
      this.onRoute(w.location.pathname);
    });

    this.checkAuth();

    this.onRoute(window.location.pathname);
  }

  private onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this.currentRoute && this.currentRoute !== route) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;
    route.render();
  }

  public go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this.onRoute(pathname);
  }

  public back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  public getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export default new Router('#app');
