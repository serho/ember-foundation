import FComponent from './f-component';

export default FComponent.extend({
  attributeBindings: [ 'data-clearing' ],

  classNameBindings: [ 'hasFeatured:clearing-feature' ],

  classNames: [ 'clearing-thumbs' ],

  'data-clearing': '',

  hasFeatured: function() {
    var images = this.get('images');

    for (var i = 0; i < images.length; i++) {
      if (images[i].hasOwnProperty('featured') && images[i].featured) {
        return true;
      }
    }

    return false;
  }.property('images.@each'),

  tagName: 'ul'
});
