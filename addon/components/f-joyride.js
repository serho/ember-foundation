import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: [ 'data-joyride', 'style' ],

  'data-joyride': '',

  setup: function() {
    $(document).foundation('joyride', 'start');
  }.on('didInsertElement'),

  style: 'display: none;',

  tagName: 'ol'
});
