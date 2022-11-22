const btn = document.querySelector(".proceed-btn");
const btn2 = document.querySelector(".pop-up-container");
const btn3 = document.querySelector(".pop-btn");
btn.addEventListener("click", function (e) {
  btn2.style.top = "50%";
  btn.style.display = "none";
});
btn3.addEventListener("click", function (e) {
  btn2.style.top = "-1000px";
  btn.style.display = "inline-block";
});
