console.log("Your code goes in this document.");
var arrOfPrices = items.map(function(el) {
  return el.price;
})
var sum = 0;
var totalPrice = arrOfPrices.forEach(function(el) {
  sum += el;
  return sum;
});
answer1 = sum / arrOfPrices.length;
document.getElementById('answer1').innerHTML = answer1


var greaterThan = [];
items.map(function(el, idx) {
  if (el.price > 14 && el.price < 18) {
    greaterThan.push("\nItem: " + el.title)
  }
});
answer2 = greaterThan;
document.getElementById('answer2').innerHTML = answer2

var gbp = [];
items.map(function(el, idx) {
  if (el.currency_code === 'GBP') {
     gbp.push("\nItem: " + el.title + "\n" + "Price: " + el.price);
  }
});
answer3 = gbp;
document.getElementById('answer3').innerHTML = answer3

var wood = [];
items.map(function(el, idx) {
  if (el.materials.indexOf('wood') !== -1 ) {
    wood.push("\nItem: " + el.title)
  }
});
answer4 = wood;
document.getElementById('answer4').innerHTML = answer4

var mat_List = [];
items.filter(function(el) {
  if (el.materials.length >= 8) {
    mat_List.push("\nItem: " + el.title + "\n" + "Number of Materials: " + el.materials.length + "\n" + "Materials: " + el.materials)
  }
});
answer5 = mat_List;
document.getElementById('answer5').innerHTML = answer5

var handmade = [];
items.filter(function(el) {
  if (el.who_made === "i_did") {
  handmade.push(el.who_made);
  }
});
answer6 = handmade.length;
document.getElementById('answer6').innerHTML = answer6
