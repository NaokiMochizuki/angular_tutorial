var myApp = angular.module('myApp');

myApp.service('sheets', function(){
  this.list = [];

  //listに帳票レコードを追加する処理
  this.add = function(lines){
    this.list.push({
      id: String(this.list.length + 1),
      createdAt: Date.now(),
      lines: lines
    });
  }

  //idから特定の帳票レコードを取得する処理
  this.get = function(id){
    var list = this.list;
    var index = list.length;
    var sheet;
    while(index--){
      sheet = list[index];
      if(sheet.id === id){
        return sheet;
      }
    }
    return null;
  };
});

