import angular from 'angular';
import uiRouter from 'angular-ui-router';
import View1Module from './view1/view1';
import View2Module from './view2/view2';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.router',
  'View1Module',
  'View2Module'
])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/view1');
    }]);
