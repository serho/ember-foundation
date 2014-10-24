import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: ['data-options', 'tabindex'],

  'data-options': Ember.computed.alias('options'),

  didInsertElement: function(){
    Ember.$(document).foundation();
  }
});
