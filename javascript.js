let body = document.body;
let cartIcon = document.querySelector(".cart-icon");
let closeButton = document.querySelector(".close");

cartIcon.addEventListener("click", function () {
  body.classList.add("showCart");
});

closeButton.addEventListener("click", function () {
  body.classList.remove("showCart");
});
