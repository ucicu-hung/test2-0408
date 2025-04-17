// document.getElementById('countId').onclick = function () {
//   var humNum = document.getElementById('humNum').value;
//   var cokeNum = document.getElementById('cokeNum').value;

//   alert(humNum);
//   alert(cokeNum);
// };

// document.getElementById('calcBtn').onclick = function () {
//   var price = document.getElementById('priceId').value;
//   var quantity = document.getElementById('quantityId').value;
//   document.getElementById('resultId').textContent = '總金額'+ (price * quantity);
// };

//+
// document.getElementById('addBtn').onclick = function () {
//     var price = parseInt(document.getElementById('priceId').value);
//     var qty = parseInt(document.getElementById('quantityId').value);
//     document.getElementById('resultId').textContent = '總金額：' + (price + qty);

//         // alert('總金額：' + (price * qty));

// };

// //-
// document.getElementById('minusBtn').onclick = function () {
//     var price = parseInt(document.getElementById('priceId').value);
//     var qty = parseInt(document.getElementById('quantityId').value);
//     document.getElementById('resultId').textContent = '總金額：' + (price - qty);
// };

// // *
// document.getElementById('timedbyBtn').onclick = function () {
//     var price = parseInt(document.getElementById('priceId').value);
//     var qty = parseInt(document.getElementById('quantityId').value);
//     document.getElementById('resultId').textContent = '總金額：' + (price * qty);
// };

// // 除
// document.getElementById('dividedbyBtn').onclick = function () {
//     var price = parseInt(document.getElementById('priceId').value);
//     var qty = parseInt(document.getElementById('quantityId').value);
//     document.getElementById('resultId').textContent = '總金額：' + (price / qty);
// };

// // 總計
// document.getElementById('calcBtn').onclick = function () {
//     var price = parseInt(document.getElementById('priceId').value);
//     var qty = parseInt(document.getElementById('quantityId').value);
//     document.getElementById('resultId').textContent = '總金額：' + (price * qty);
// };

// document.getElementById('resetBtn').onclick = function () {
//     // 清除輸入框內容
//     document.getElementById('priceId').value = '';
//     document.getElementById('quantityId').value = '';

//     // 清除結果顯示內容
//     document.getElementById('resultId').textContent = '';
// };

// 共用計算函式
function calculate(op) {
    var price = parseFloat(document.getElementById('priceId').value);
    var qty = parseFloat(document.getElementById('quantityId').value);
    var result;

    // if (isNaN(price) || isNaN(qty)) {
    //     document.getElementById('resultId').textContent = '請輸入金額與數量';
    //     return;
    // }

    switch (op) {
        case '+':
            result = price + qty;
            break;
        case '-':
            result = price - qty;
            break;
        case '*':
            result = price * qty;
            break;
        case '/':
            if (qty === 0) {
                result = '除數不能為 0';
            } else {
                result = price / qty;
            }
            break;
        default:
            result = '未知運算';
    }

    document.getElementById('resultId').textContent = '總金額：' + result;
}

// 各個按鈕綁定事件
document.getElementById('addBtn').onclick = function () {
    calculate('+');
};
document.getElementById('minusBtn').onclick = function () {
    calculate('-');
};
document.getElementById('timedbyBtn').onclick = function () {
    calculate('*');
};
document.getElementById('dividedbyBtn').onclick = function () {
    calculate('/');
};

//「計算金額」可以預設為相乘
// document.getElementById('calcBtn').onclick = function () {
//     calculate('*');
// };

// 清除功能
document.getElementById('resetBtn').onclick = function () {
    document.getElementById('priceId').value = '';
    document.getElementById('quantityId').value = '';
    document.getElementById('resultId').textContent = '';
    document.getElementById('priceId').focus();
};

document.getElementById('priceId').textContent = last;
