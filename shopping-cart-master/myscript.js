const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener("click", function() {
  decrement("input-value", "phone-price", 1219);
  updateSum("total");
  updateSum("subtotal");
})

const plusBtn = document.getElementById("plus-btn");
plusBtn.addEventListener("click", function () {
  increment("input-value", "phone-price", 1219);
  updateSum("total");
  updateSum("subtotal");
})

var input = document.getElementById("input-value");
input.addEventListener("keyup", function(event) {
  enterValue("input-value", "phone-price", 1219);
  updateSum("total");
  updateSum("subtotal");
})

// Second Item

const minusBtn2 = document.getElementById("minus-btn-2");
minusBtn2.addEventListener("click", function () {
  decrement("input-value-2", "caching-price", 59);
  updateSum("total");
  updateSum("subtotal");
})

const plusBtn2 = document.getElementById("plus-btn-2");
plusBtn2.addEventListener("click", function () {
  increment("input-value-2", "caching-price", 59);
  updateSum("total");
  updateSum("subtotal");
})

var input2 = document.getElementById("input-value-2");
input2.addEventListener("keyup", function(event) {
  enterValue("input-value-2", "caching-price", 59);
  updateSum("total");
  updateSum("subtotal");
})

// Second Item

function decrement(quantity, unitPrice, vPrice) {
  let currentValue = document.getElementById(quantity).value;
  let updatedValue = parseFloat(currentValue)-1;
  if (updatedValue >= 0) {document.getElementById(quantity).value = updatedValue}
  const price = document.getElementById(unitPrice).innerText; 
  if (updatedValue >= 0) {
      const updatedPrice = parseFloat(price) - vPrice;
      document.getElementById(unitPrice).innerText = updatedPrice;
  }
}

function increment(quantity, unitPrice, vPrice) {
  let currentValue = document.getElementById(quantity).value;
  let updatedValue = parseFloat(currentValue)+1;
  if (updatedValue >= 0) {document.getElementById(quantity).value = updatedValue}
  const price = document.getElementById(unitPrice).innerText; 
  const updatedPrice = parseFloat(price) + vPrice;
  document.getElementById(unitPrice).innerText = updatedPrice;
}

function sumUp(product1, product2) {
  var phn = document.getElementById(product1).innerText;
  var casing = document.getElementById(product2).innerText;
  var subtotal = parseFloat(phn) + parseFloat(casing);
  return subtotal;
}

function updateSum(id) {
  document.getElementById(id).innerText = sumUp("phone-price", "caching-price");
}

var x = document.getElementById("remove-phone-cart");
x.addEventListener("click", function() {
  removeCart("phone-cart", "phone-price")
})

var y = document.getElementById("remove-caching-cart");
y.addEventListener("click", function() {
  removeCart("caching-cart", "caching-price")
})


const checkoutBtn = document.getElementById("check-out-btn");
checkoutBtn.addEventListener("click", function() {
  document.getElementById("main-section").style.display = "none";
  document.getElementById("thankyou-section").style.display = "block";
})