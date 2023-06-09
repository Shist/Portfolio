"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".main__contact-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
    Swal.fire("Success!", "Your message has been successfully sent!");
  });
});
