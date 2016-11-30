angular.module('myApp', ['ngRoute'])

  .config(['$routeProvider', require('./route')])

  .controller('CreationController', require('./controller/creation_controller'))
  .controller('SheetController', require('./controroller/creation_controller'))
  .controller('SheetListController', require('./controller/sheet_list_controller'))

  .service('sheets', require('./service/sheets'));
