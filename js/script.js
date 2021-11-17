const services = document.querySelector("#nav > ul > li:nth-child(2) > a");
const dropdownSign = document.querySelector(
  "#nav > ul > li:nth-child(2) > a > i"
);
const dropdown = document.querySelector("#nav > ul > li.dropdown");

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navLinks");
  const navLinks = document.querySelectorAll(".navLinks li");
  const body = document.querySelector("body");
  const logo = document.querySelector(".logo");

  logo.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    body.classList.toggle("scrollOf");
    burger.classList.toggle("change");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
  });
};

const banerText = document.querySelector(".banerText");
const banerTextBellow = document.querySelector(".banerTextBellow");
const banerTextBellow2 = document.querySelector(".banerTextBellow2");

navSlide();

window.onscroll = function () {
  let st = this.window.scrollY;
  console.log(st);
};
$(window).scroll(function () {
  let st = $(window).scrollTop();
  console.log(st);
  if (st > 0) {
    $("#nav").addClass("scrolled");
  } else {
    $("#nav").removeClass("scrolled");
  }
});

window.onload = function () {
  banerText.style.animation = "banerTextFade 1.5s ease-in 0.2s forwards";
  if (banerText.style.animation) {
    banerText.style.opacity = "1";
  }
  banerTextBellow.style.animation =
    "banerTextBellowFade 1s ease-in 1.5s forwards";
  banerTextBellow2.style.animation =
    "banerTextBellowFade 1s ease-in 2.5s forwards";
};

dropdown.addEventListener("mouseover", function () {
  services.style.color = "red";
  dropdownSign.style.animation = "rotateSignUp 0.5s ease-in forwards";
});

dropdown.addEventListener("mouseout", function () {
  services.style.color = "#0072e1";
  dropdownSign.style.animation = "rotateSignDown 0.5s ease-in forwards";
});
