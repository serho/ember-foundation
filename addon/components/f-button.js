import Ember from 'ember';
import EnableDropdown from '../mixins/enable-dropdown';

export default Ember.Component.extend(EnableDropdown, {
  attributeBindings: [ 'aria-label', 'role', 'tabindex' ],

  classNames: [ 'button' ],

  click: function () {
    this.sendAction();
  },

  role: 'button',

  tagName: 'a',
});
