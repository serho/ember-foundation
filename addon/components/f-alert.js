import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: [ 'data-alert' ],

  classNames: [ 'alert-box' ],

  'data-alert': ''
});
