import Page404 from './pages/404/404';
import Page500 from './pages/500/500';
import Auth from './pages/auth/Auth';
import Registration from './pages/registration/Registration';
import Profile from './pages/profile';
import Chat from './pages/chat';
import Router from './service/Router/Router';

const router = new Router('#app');

router
  .use('/', Auth)
  .use('/sign-up', Registration)
  .use('/settings', Profile)
  .use('/messenger', Chat)
  .use('/404', Page404)
  .use('/500', Page500)
  .start();
