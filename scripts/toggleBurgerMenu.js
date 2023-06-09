"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const burgerBtn = document.querySelector(".header__burger-menu-btn");
  const hideMenu = () => {
    burgerMenu.classList.remove("appeared-flex");
    burgerMenu.classList.add("hidden-element");
    burgerBtn.classList.remove("header__burger-menu-btn_close");
    burgerBtn.classList.add("header__burger-menu-btn_open");
  };
  burgerBtn.addEventListener("click", () => {
    if (window.getComputedStyle(burgerMenu, null).display === "flex") {
      hideMenu();
    } else {
      burgerMenu.classList.remove("hidden-element");
      burgerMenu.classList.add("appeared-flex");
      burgerBtn.classList.remove("header__burger-menu-btn_open");
      burgerBtn.classList.add("header__burger-menu-btn_close");
    }
  });
  // Event while clicking on dark space from the left of the menu
  burgerMenu.addEventListener("click", (event) => {
    if (event.target === burgerMenu) {
      hideMenu();
    }
  });
  const tabletL = 768;
  window.addEventListener("resize", () => {
    if (this.outerWidth > tabletL) {
      hideMenu();
    }
  });
});
