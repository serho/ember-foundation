import Ember from 'ember';

export default Ember.Component.extend({
  attributeBindings: [ 'aria-label', 'role', 'tabindex' ],

  classNames: [ 'button' ],

  click: function () {
    this.sendAction();
  },

  role: 'button',

  tagName: 'a',
});
