const navToggle = document.querySelector(".header__toggle");

function toggleNav() {
  navToggle.classList.toggle("header__toggle--open");
  navToggle.setAttribute("aria-expanded", `${!(navToggle.getAttribute("aria-expanded") === "true")}`);
}

navToggle.addEventListener("click", toggleNav);
