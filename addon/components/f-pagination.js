import FComponent from './f-component';

export default FComponent.extend({
  actions: {
    changePage: function (page) {
      if (page === this.get('currentPage')) {
        return;
      }

      console.log('Changing page to', page);
    },

    nextPage: function () {
      if (this.get('onLastPage')) {
        return;
      }

      console.log('Next page!');
    },

    previousPage: function () {
      if (this.get('onFirstPage')) {
        return;
      }

      console.log('Previous page!');
    }
  },

  'aria-label': 'Pagination',

  attributeBindings: [ 'aria-label', 'role' ],

  classNames: [ 'pagination' ],

  onFirstPage: function () {
    return this.get('currentPage') === 1;
  }.property('currentPage'),

  onLastPage: function () {
    return this.get('currentPage') === this.get('totalPages');
  }.property('currentPage', 'totalPages'),

  role: 'menubar',

  tagName: 'ul'
});
