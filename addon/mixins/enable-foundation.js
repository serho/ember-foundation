/* globals $ */

import Ember from 'ember';

export default Ember.Mixin.create({
  initializeFoundation: function () {
    $(document).foundation();
  }.on('didInsertElement')
});
