/* globals $ */

import registerHelpers from 'ember-foundation/utils/register-helpers';

export default {
  name: 'ember-foundation',

  initialize: function (container, app) {
    app.inject('component:f-breadcrumbs', 'router', 'router:main');

    registerHelpers();

    window.addEventListener('load', function () {
      $(document).foundation();
    });
  }
};
