"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerBtn = document.querySelector(".header__burger-menu-btn");
  const hideMenu = () => {
    burgerMenu.classList.remove("appeared-flex");
    burgerMenu.classList.add("hidden-element");
    burgerBtn.classList.remove("burger-btn-close");
    burgerBtn.classList.add("burger-btn-open");
  };
  burgerBtn.addEventListener("click", () => {
    if (window.getComputedStyle(burgerMenu, null).display === "flex") {
      hideMenu();
    } else {
      burgerMenu.classList.remove("hidden-element");
      burgerMenu.classList.add("appeared-flex");
      burgerBtn.classList.remove("burger-btn-open");
      burgerBtn.classList.add("burger-btn-close");
    }
  });
  const tabletL = 768;
  window.addEventListener("resize", () => {
    if (this.outerWidth > tabletL) {
      hideMenu();
    }
  });
});
