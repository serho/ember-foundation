import Ember from 'ember';

export default {
  name: 'ember-foundation',

  initialize: function(container, app) {
    app.inject('component:f-breadcrumbs', 'router', 'router:main');

    Ember.View.reopen({
      initFoundation: function() {
        Ember.$(document).foundation();
      }.on('didInsertElement')
    });
  }
};
