import FComponent from './f-component';

export default FComponent.extend({
  classNames: [ 'switch' ],

  inputId: function () {
    return this.get('elementId') + '-input';
  }.property('elementId'),

  type: 'checkbox'
});
