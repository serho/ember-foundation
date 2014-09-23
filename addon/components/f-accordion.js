import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: [ 'data-accordion' ],

  classNames: [ 'accordion' ],

  'data-accordion': '',

  setup: function() {
    $(document).foundation('accordion', 'init');
  }.on('didInsertElement'),

  tagName: 'dl'
});
