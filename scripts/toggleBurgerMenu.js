"use strict";

const burgerMenu = document.querySelector(".burger-menu");
document
  .querySelector(".header__burger-menu-btn")
  .addEventListener("click", () => {
    burgerMenu.classList.remove("hidden-element");
    burgerMenu.classList.add("appeared-flex");
  });
document
  .querySelector(".burger-menu__close-btn")
  .addEventListener("click", () => {
    burgerMenu.classList.remove("appeared-flex");
    burgerMenu.classList.add("hidden-element");
  });
const tabletL = 768;
window.addEventListener("resize", () => {
  if (this.outerWidth > tabletL) {
    burgerMenu.classList.remove("appeared-flex");
    burgerMenu.classList.add("hidden-element");
  }
});
