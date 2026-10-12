const dropdownButtons = document.querySelectorAll("nav > ul > li > button");

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("nav > ul");

menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = button.nextElementSibling;
    menu.classList.toggle("open");

  });
});
