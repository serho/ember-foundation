import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: ['data-joyride', 'style'],

  'data-joyride': '',

  style: 'display: none;',

  tagName: 'ol'
});
