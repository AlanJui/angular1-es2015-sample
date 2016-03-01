import angular from 'angular';
import uiRouter from 'angular-ui-router';
import controller from './view2-controller';
import MemberService from '../components/service/member-service';

let module = angular.module('View2Module', ['ui.router']);

module
  .service('MemberService', MemberService)

  .controller('View2Controller', controller)

  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('view2', {
          url: '/view2',
          templateUrl: 'view2/view2.html',
          controller: 'View2Controller',
          controllerAs: 'vm'
        });
    }]);

export default module;

//'use strict';
//
//angular.module('myApp.view2', ['ngRoute'])
//
//  .config(['$routeProvider', function($routeProvider) {
//    $routeProvider.when('/view2', {
//      templateUrl: 'view2/view2.html',
//      controller: 'View2Ctrl',
//      controllerAs: 'vm'
//    });
//  }])
//
//.controller('View2Ctrl', [function() {
//  var vm = this;
//  vm.pageTitle = '測試';
//}]);
