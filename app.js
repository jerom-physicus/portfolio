document.querySelector(".menu-icon").addEventListener("click", function () {
  document.getElementById("nav").style.transform = "translateY(0%)";
});
document.querySelector(".close-icon").addEventListener("click", function () {
  document.getElementById("nav").style.transform = "translateY(-100%)";
});
const observer = new IntersectionObserver(handleIntersection);
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}
let target = document.querySelector(".profile-img");
let target2 = document.querySelector(".more-btn ");
let target3 = document.querySelector(".page1-h");
let target4 = document.querySelector(".page1-p");
let target5 = document.querySelector(".profile-img2");
let target6 = document.querySelector(".about-h");
observer.observe(target);
observer.observe(target2);
observer.observe(target3);
observer.observe(target4);
observer.observe(target5);
observer.observe(target6);
