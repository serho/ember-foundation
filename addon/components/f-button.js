import DropdownEnabled from '../mixins/dropdown-enabled';
import FComponent from './f-component';

export default FComponent.extend(DropdownEnabled, {
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
