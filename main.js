const button = document.querySelector("button");
const aboutMe =  document.querySelector(".section1");

button.addEventListener("click", function more() {
    aboutMe.classList.toggle("active");
    button.classList.toggle("active_button");

    if(button.innerText === "Read more") {
        button.innerText = "Read less";
    } else {
        button.innerText = "Read more";
    }
});

const nav = document.querySelector(".nav");
const linksContainer = document.querySelector(".nav-container");
const links = document.querySelectorAll(".nav-link");

nav.addEventListener("click", () => {
  linksContainer.classList.toggle("hidden");
 
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 550px)").matches) {
    closeMenu();
  }
});

if (window.matchMedia("(max-witdh: 550px").matches) {
  closeMenu();
}

function closeMenu() {
  links.forEach((link) => {
    link.addEventListener("click", () => {
      linksContainer.classList.remove("hidden");
      nav.classList.remove("hidden");
    });
  });
}