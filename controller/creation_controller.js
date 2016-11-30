module.exports = ['$location', 'sheets', function($location, sheets){
  var cctr = this;

  //初期化
  cctr.lines = [createOrderLine()];

// -------viewで使うメソッドを再定義-------
  cctr.addLine = addLine;
  cctr.save = save;
  cctr.removeLine = removeLine;
  cctr.initialize = initialize;
  cctr.getSubtotal = getSubtotal;
  cctr.getTotalAmount = getTotalAmount;

// --------viewから呼び出す処理----------

  // 新規登録行を追加
  function addLine(){
    cctr.lines.push(createOrderLine());
  }

  // 新規行の内容を保存
  function save(){
    sheets.add(cctr.lines);
    $location.path('/');
  };

  // 行の削除
  function removeLine(target){
    var index = cctr.lines.indexOf(target);
    if(index !== -1){
      cctr.lines.splice(index, 1);
    }
  };

  // 行を初期化する処理
  function initialize(){
    cctr.lines = [createOrderLine()];
  }

  //小計を計算する処理
  function getSubtotal(orderLine){
    return orderLine.unitPrice * orderLine.count;
  }

  //合計を計算する処理
  function getTotalAmount(){
    var total = 0;
    angular.forEach(cctr.lines, function(orderLine){
      total += getSubtotal(orderLine);
    });
    return total;
  }

// --------controllerから呼び出す処理---------

  function createOrderLine(){
    return {
      productName: '',
      unitPrice: 0,
      count: 0
    };
  }
}];

