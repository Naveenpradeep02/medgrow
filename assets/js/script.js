var typed = new Typed(".auto-type", {
  strings: [
    "Digital Marketing",
    "SMM",
    "LEAD GENERATION",
    "SEO",
    "WEBSITE DESIGNING",
    "BRANDING",
  ],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
const serviceMenu = document.querySelector(".sub-service");
const menubar = document.querySelector(".menu-bar");
const menu = document.querySelector("nav ul");

// sub menue show
const showServices = (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (serviceMenu) {
    serviceMenu.classList.toggle("show-services");
  } else {
    console.error("Service menu not found!");
  }
};
// side menubar
document.addEventListener("click", (event) => {
  if (!serviceMenu.contains(event.target)) {
    serviceMenu.classList.remove("show-services");
  }
});

const showmenu = () => {
  menubar.classList.toggle("show-menu");
  menu.classList.toggle("resmenu");
};
