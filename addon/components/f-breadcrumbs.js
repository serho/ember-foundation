import Ember from 'ember';
import FComponent from './f-component';

export default FComponent.extend({
  applicationController: null,

  breadCrumbs: function () {
    var breadCrumbs = [];
    var controllers = this.get('controllers');
    var defaultPaths = this.get('pathNames');

    controllers.forEach(function (controller, index) {
      var crumbName = controller.get('breadCrumb');

      if (!Ember.isEmpty(crumbName)) {
        var defaultPath = defaultPaths[index];
        var specifiedPath = controller.get('breadCrumbPath');

        return breadCrumbs.addObject({
          name: crumbName,
          path: specifiedPath || defaultPath,
          linkable: specifiedPath !== false,
          isCurrent: false
        });
      }
    });

    if (breadCrumbs.length > 0) {
      breadCrumbs[breadCrumbs.length - 1].isCurrent = true;
    }

    return breadCrumbs;
  }.property(
    'controllers.@each.breadCrumb',
    'controllers.@each.breadCrumbPath',
    'pathNames.[]'
  ),

  classNames: [ 'breadcrumbs' ],

  controllers: function () {
    return this.get('handlerInfos').map(function (handlerInfo) {
      return handlerInfo.handler.controller;
    });
  }.property('handlerInfos.[]'),

  handlerInfos: function () {
    return this.get('router').router.currentHandlerInfos;
  }.property('applicationController.currentPath'),

  tagName: 'ul',

  pathNames: function () {
    return this.get('handlerInfos').map(function (handlerInfo) {
      return handlerInfo.name;
    });
  }.property('handlerInfos.[]'),

  router: null
});
