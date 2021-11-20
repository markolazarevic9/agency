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
};
$(window).scroll(function () {
  let st = $(window).scrollTop();
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
    "banerTextBellowFade 1s ease-in 1.5s forwards";
};

dropdown.addEventListener("mouseover", function () {
  services.style.color = "red";
  dropdownSign.style.animation = "rotateSignUp 0.5s ease-in forwards";
});

dropdown.addEventListener("mouseout", function () {
  services.style.color = "#0072e1";
  dropdownSign.style.animation = "rotateSignDown 0.5s ease-in forwards";
});

let inputName = document.querySelector(
  "body > div:nth-child(5) > div:nth-child(2) > form > input[type=text]:nth-child(1)"
);

let inputs = document.querySelectorAll(
  "body > div:nth-child(5) > div:nth-child(2) > form > input"
);

let arr = [];
inputs.forEach((input) => arr.push(input));
console.log(arr);
let message = document.querySelector(
  "body > div:nth-child(5) > div:nth-child(2) > form > textarea"
);
arr.push(message);
console.log(arr);

let textHolders = document.querySelectorAll(
  "body > div:nth-child(5) > div:nth-child(2) > form > label"
);
let placeholderValue = "";

arr.forEach((input) =>
  input.addEventListener("focus", () => {
    placeholderValue = input.placeholder;
    let inputName = input.getAttribute("name");
    input.placeholder = "";
    textHolders.forEach((label) => {
      if (label.getAttribute("for") == inputName) {
        label.classList.remove("textHolderHidden");
        label.classList.add("textHolderVisible");
      }
    });
  })
);

arr.forEach((input) =>
  input.addEventListener("blur", () => {
    input.placeholder = placeholderValue;
    placeholderValue = "";
    let inputName = input.getAttribute("name");
    textHolders.forEach((label) => {
      if (label.getAttribute("for") == inputName) {
        if (input.value == "") {
          label.classList.remove("textHolderVisible");
          label.classList.add("textHolderHidden");
        }
      }
    });
  })
);

window.onscroll = function () {
  let st = this.window.scrollY;
};
$(window).scroll(function () {
  let st = $(window).scrollTop();
  if (st > 0) {
    $("#nav").addClass("scrolled");
  } else {
    $("#nav").removeClass("scrolled");
  }
});

/*   Animations  */

window.onscroll = () => {
  let st = this.window.scrollY;
  console.log(st);
  if (st > 180) {
    document
      .querySelector("body > div:nth-child(3) > div:nth-child(1)")
      .classList.add("appearLeft");
    document
      .querySelector("body > div:nth-child(3) > div:nth-child(2)")
      .classList.add("appearRight");
  }

  if (st > 850) {
    document
      .querySelector("body > div:nth-child(4) > div:nth-child(1)")
      .classList.add("fadeIn");
    document
      .querySelector("body > div:nth-child(4) > div:nth-child(2)")
      .classList.add("fadeIn");
  }
  if (st > 1700) {
    document
      .querySelector("body > div:nth-child(5) > div:nth-child(1)")
      .classList.add("appearRight");
    document
      .querySelector("body > div:nth-child(5) > div:nth-child(2)")
      .classList.add("appearLeft");
  }
};
