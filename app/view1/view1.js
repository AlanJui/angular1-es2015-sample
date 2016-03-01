//import angularRouter from 'angular-route';
import controller from './view1-controller';

let module = angular.module('view1Module', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: controller,
    controllerAs: 'vm'
  });
}]);

export default module;

//'use strict';
//
//angular.module('myApp.view1', ['ngRoute'])
//
//.config(['$routeProvider', function($routeProvider) {
//  $routeProvider.when('/view1', {
//    templateUrl: 'view1/view1.html',
//    controller: 'View1Ctrl'
//  });
//}])
//
//.controller('View1Ctrl', [function() {
//
//}]);

