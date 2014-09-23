import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('component-demos', { path: '/components/' }, function () {
    this.route('accordion');
    this.route('alert');
    this.route('breadcrumbs');
    this.route('button');
    this.route('clearing');
  });

  this.route('kitchen-sink');
});

export default Router;
