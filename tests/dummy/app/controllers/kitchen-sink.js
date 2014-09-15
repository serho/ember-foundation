import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    greet: function () {
      console.log('Hello!');
    }
  },

  breadCrumb: 'Kitchen Sink'
});
