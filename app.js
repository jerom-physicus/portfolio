document.querySelector(".menu-icon").addEventListener("click", function () {
  document.getElementById("nav").style.transform = "translateY(0%)";
});
document.querySelector(".menu-icon2").addEventListener("click", function () {
  document.getElementById("nav2").style.transform = "translateY(0%)";
});
document.querySelector(".close-icon").addEventListener("click", function () {
  document.getElementById("nav").style.transform = "translateY(-100%)";
  document.getElementById("nav2").style.transform = "translateY(-100%)";
});
document.getElementById("close2").addEventListener("click", function () {
  document.getElementById("nav2").style.transform = "translateY(-100%)";
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
let target7 = document.querySelector(".about-box");
let target8 = document.querySelector(".socials-page-1");
let target9 = document.querySelector(".exp-h");
let target10 = document.querySelector(".projects-h1");
observer.observe(target);
observer.observe(target2);
observer.observe(target3);
observer.observe(target4);
observer.observe(target5);
observer.observe(target6);
observer.observe(target7);
observer.observe(target8);
observer.observe(target9);
observer.observe(target10);
//target2.forEach((el) => observer.observe(el));
//target3.forEach((el) => observer.observe(el));
//target5.forEach((el) => observer.observe(el));
//target6.forEach((el) => observer.observe(el));
//target7.forEach((el) => observer.observe(el));
//target8.forEach((el) => observer.observe(el));
//target9.forEach((el) => observer.observe(el));
//target10.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver(handleIntersection2);
function handleIntersection2(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show2");
    } else {
      entry.target.classList.remove("show2");
    }
  });
}

let target21 = document.querySelector(".logos");
observer2.observe(target21);

const observer3 = new IntersectionObserver(handleIntersection3);
function handleIntersection3(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show3");
    } else {
      entry.target.classList.remove("show3");
    }
  });
}

let target31 = document.querySelector(".project-1");
let target32 = document.querySelector(".project-2");
let target33 = document.querySelector(".project-3");
observer3.observe(target31);
observer3.observe(target32);
observer3.observe(target33);

var button = document.getElementById("toggle-switch");
var mode = document.querySelector(".light-mode");
var mode2 = document.querySelector(".dark-mode");
button.addEventListener("click", function () {
  mode.classList.toggle("active");
  mode2.classList.toggle("active2");
});
