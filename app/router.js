import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contacts');
  this.route('home');
  this.route('add');
  this.route('contact',{ path: '/contacts/:id' });
  this.route('update',{path:'/update/:id'});
});

export default Router;
