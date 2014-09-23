import Ember from 'ember';

export default Ember.Mixin.create({
  setupFoundation: function() {
    Ember.$(document).foundation();
  }.on('didInsertElement')
});
