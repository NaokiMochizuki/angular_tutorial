var myApp = angular.module('myApp');

myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/index_template.html',
      controller: 'SheetListController',
      controllerAs: 'slctr'
    })
    .when('/new', {
      templateUrl: 'templates/new_template.html',
      controller: 'CreationController',
      controllerAs: 'cctr'
    })
    .when('/sheet/:id', {
      templateUrl: 'templates/sheet_template.html',
      controller: 'SheetController',
      controllerAs: 'sctr'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);

