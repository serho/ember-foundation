import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: [ 'data-clearing' ],

  classNameBindings: [ 'hasFeatured:clearing-feature' ],

  classNames: [ 'clearing-thumbs' ],

  'data-clearing': '',

  setup: function() {
    $(document).foundation('clearing', 'init');
  }.on('didInsertElement'),

  tagName: 'ul'
});
