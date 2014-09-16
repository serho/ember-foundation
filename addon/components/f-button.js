import Ember from 'ember';
import DropdownEnabled from '../mixins/dropdown-enabled';

export default Ember.Component.extend(DropdownEnabled, {
  attributeBindings: [ 'aria-label', 'role', 'tabindex' ],

  classNames: [ 'button' ],

  click: function () {
    this.sendAction();
  },

  isSplit: function () {
    return this.get('dropdown') && this.classNames.indexOf('split') > -1;
  }.property('class'),

  role: 'button',

  tagName: 'a',
});
