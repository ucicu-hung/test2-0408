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

document.getElementById('calcBtn').onclick = function () {
    var price = parseInt(document.getElementById('priceId').value);
    var qty = parseInt(document.getElementById('quantityId').value);
    document.getElementById('resultId').textContent = '總金額：' + (price * qty);
    
    // alert('總金額：' + (price * qty));
};