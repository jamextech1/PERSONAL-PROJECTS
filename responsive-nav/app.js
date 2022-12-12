const btn = document.querySelector(".toggler");
const btn3 = document.querySelector(".nav-links");
btn.addEventListener("click", function () {
  btn.classList.toggle("toggle");
  btn3.classList.toggle("toggle");
});
