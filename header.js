// ************************* HEADER menu toggle
// show menu
const NavMenu = document.getElementById("nav-menu"),
  NavToggle = document.getElementById("nav-toggle"),
  NavClose = document.getElementById("nav-close");

//   menu showing
if (NavToggle) {
  NavToggle.addEventListener("click", () => {
    NavMenu.classList.add("show-menu");
  });
}

//  menu hidden
if (NavClose) {
  NavClose.addEventListener("click", () => {
    NavMenu.classList.remove("show-menu");
  });
}

// menu closed when click the list
const NavLink = document.querySelectorAll(".nav_link");
function linkAction() {
  const NavMenu = document.getElementById("nav-menu");
  NavMenu.classList.remove("show-menu");
}

NavLink.forEach(n => n.addEventListener("click", linkAction));

/***************************** CHECKBOX  contact */
