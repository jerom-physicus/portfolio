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

const observerD = new IntersectionObserver(handleIntersectionD);
function handleIntersectionD(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}

let targetD = document.querySelector(".profile-img-D");
let targetD2 = document.querySelector(".more-btn-D ");
let targetD3 = document.querySelector(".page1-h-D");
let targetD4 = document.querySelector(".page1-p-D");
let targetD5 = document.querySelector(".profile-img2-D");
let targetD6 = document.querySelector(".about-h-D");
let targetD7 = document.querySelector(".about-box-D");
let targetD8 = document.querySelector(".socials-page-1-D");
let targetD9 = document.querySelector(".exp-h-D");
let targetD10 = document.querySelector(".projects-h1-D");
let targetD11 = document.querySelector(".logos-D");
observerD.observe(targetD);
observerD.observe(targetD2);
observerD.observe(targetD3);
observerD.observe(targetD4);
observerD.observe(targetD5);
observerD.observe(targetD6);
observerD.observe(targetD7);
observerD.observe(targetD8);
observerD.observe(targetD9);
observerD.observe(targetD10);
observerD.observe(targetD11);

const observer3D = new IntersectionObserver(handleIntersection3D);
function handleIntersection3D(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show3");
    } else {
      entry.target.classList.remove("show3");
    }
  });
}

let target31D = document.querySelector(".project-1-D");
let target32D = document.querySelector(".project-2-D");
let target33D = document.querySelector(".project-3-D");
observer3D.observe(target31D);
observer3D.observe(target32D);
observer3D.observe(target33D);
