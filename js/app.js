/**Gestisce l'interazione con l'hamburger menù
 * su mobile e con la navbar su desktop */

const menu = document.getElementById("hamburger-menu");
const navbar = document.querySelector("nav");

menu.addEventListener("click", () => {
  navbar.classList.toggle("show-navbar");
});
