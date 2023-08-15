document.querySelector(".menu-icon").addEventListener("click", function () {
  document.getElementById("nav").style.transform = "translateY(0%)";
});
document.querySelector(".close-icon").addEventListener("click", function () {
  document.getElementById("nav").style.transform = "translateY(-100%)";
});
