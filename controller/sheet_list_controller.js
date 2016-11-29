var myApp = angular.module('myApp');

myApp.controller('SheetListController', ['sheets', function(sheets){
  var slctr = this;

  //初期化
  slctr.list = sheets.list;
}]);

