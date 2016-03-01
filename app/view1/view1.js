import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './view1-controller';

let module = angular.module('View1Module', ['ui.router']);

module

  .controller('View1Controller', controller)

  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('view1', {
          url: '/view1',
          templateUrl: 'view1/view1.html',
          controller: 'View1Controller',
          controllerAs: 'vm'
        });
    }]);

export default module;
