module.exports = ['$routeParams', 'sheets', function($params, sheets){

  //初期化
  var sctr = this;
  sctr.list = sheets.list
  sctr.sheet = sheets.get($params.id)

  //--------viewで使用するメソッドを定義-----------
  sctr.getSubtotal = getSubtotal;
  sctr.getTotalAmount = getTotalAmount;

  //----------viewから呼び出す処理-----------------
  //小計を計算する処理
  function getSubtotal(orderLine){
    return orderLine.unitPrice * orderLine.count;
  }

  //合計を計算する処理
  function getTotalAmount(lines){
    var total = 0;
    angular.forEach(lines, function(orderLine){
      total += getSubtotal(orderLine);
    });
    return total;
  }
}];

