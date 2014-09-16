import Ember from 'ember';

export default Ember.Mixin.create({
  attributeBindings: [ 'aria-controls', 'data-dropdown', 'data-options' ],

  setupDropdown: function () {
    var alignment = this.get('align-dropdown');
    var dropdownId = this.get('dropdown');

    if (!dropdownId) {
      return;
    }

    this.set('aria-controls', dropdownId);

    // A split button will not include this property directly
    if (!this.get('isSplit')) {
      this.set('data-dropdown', dropdownId);
    }

    if (alignment) {
      this.set('data-options', 'align:' + alignment);
    }


    this.$().foundation('dropdown', 'init');
  }.on('didInsertElement')
});
