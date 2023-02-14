var plusBtn = document.querySelectorAll(".plus-btn");
var minBtn = document.querySelectorAll(".minus-btn");
var deleteBtn = document.querySelectorAll(".delete-btn");
var parentDivs = document.querySelectorAll(".item");
var quantities = document.querySelectorAll(".quantityValue");
var likeBtn = document.querySelectorAll(".like-btn");
var pic = document.querySelectorAll(".like-i")
var totalSum = document.getElementById("total");


for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function (e) {
    if (quantities[i].value >= 0) {
      quantities[i].value++;
    }
    totalPrice()
  });
}

for (let i = 0; i < minBtn.length; i++) {
  minBtn[i].addEventListener("click", function (e) {
    if (quantities[i].value > 0) {
      quantities[i].value--;
    }
    totalPrice()
  });
}

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", function () {
    deleteBtn[i].parentElement.parentElement.remove()
    totalPrice()
  });
}

for (let i=0; i<likeBtn.length; i++) {
  likeBtn[i].addEventListener("click", function(){
    if(pic[i].style.filter === "grayscale(100%)"){
      pic[i].style.filter = "grayscale(0%)";
    }
    else{
      pic[i].style.filter = "grayscale(100%)";
    }
  })
}

function totalPrice() {
  var prices = document.querySelectorAll(".price");

  let s = 0;
  for (let i = 0; i < prices.length; i++) {
    s += prices[i].innerText * quantities[i].value
  }
  totalSum.innerText = s
}
