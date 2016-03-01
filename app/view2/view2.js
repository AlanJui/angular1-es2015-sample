import controller from './view2-controller';
import MemberService from '../components/service/member-service';

let module = angular.module('view2Module', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
      templateUrl: 'view2/view2.html',
      controller: controller,
      controllerAs: 'vm'
    });
  }]);

module.service('MemberService', MemberService);

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
