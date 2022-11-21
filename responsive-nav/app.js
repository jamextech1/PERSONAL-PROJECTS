const btn = document.querySelector(".hamburger");
const btn2 = document.querySelector(".hamburger-close");
const btn3 = document.querySelector(".nav-links");
btn.addEventListener("click", function (e) {
  btn2.style.display = "block";
  btn3.style.left = "0";
  btn.style.display = "none";
});
btn2.addEventListener("click", function (e) {
  btn2.style.display = "none";
  btn3.style.left = "-200%";
  btn.style.display = "block";
});
