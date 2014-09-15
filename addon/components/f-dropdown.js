import Ember from 'ember';

export default Ember.Component.extend({
  'aria-hidden': 'true',

  attributeBindings: [ 'aria-hidden', 'data-dropdown-content', 'tabindex' ],

  classNames: [ 'f-dropdown' ],

  'data-dropdown-content': function () {
    if (this.classNames.indexOf('content') > -1) {
      return '';
    }

    return;
  }.property('class'),

  tabindex: -1,

  tagName: 'div'
});
