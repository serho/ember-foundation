import Ember from 'ember';

export default Ember.Mixin.create({
  setupFoundation: function () {
    console.log('setupFoundation');
    this.$().foundation('topbar');
    this.$().foundation('clearing');
    this.$().foundation('reveal');
    this.$().foundation('reveal-modal');
    this.$().foundation('reveal-id');
  }.on('didInsertElement'),

  teardownFoundation: function () {
    console.log('teardownFoundation');
    this.$().foundation('topbar', 'off');
    this.$().foundation('clearing', 'off');
    this.$().foundation('reveal', 'off');
    this.$().foundation('reveal-modal', 'off');
    this.$().foundation('reveal-id', 'off');
  }.on('willDestroyElement')
});
