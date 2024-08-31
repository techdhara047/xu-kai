const menuIcon = document.querySelector("[data-menu]");
const aboutElm = document.querySelector("[data-about]");
const cancelElm = document.querySelector("[data-cancel]");
const button = document.querySelector(".btn");

if (menuIcon && aboutElm) {
  menuIcon.addEventListener("click", () => {
    const isOpen = aboutElm.style.transform === "translateX(0%)";
    aboutElm.style.transform = isOpen ? "translateX(-100%)" : "translateX(0%)";
  });
} else {
  console.error("Menu icon or about element not found.");
}

cancelElm.addEventListener("click", () => {
  aboutElm.style.transform = "translateX(100%)";
});
// button.addEventListener("click", () => {
//   aboutElm.style.transform = "translateX(100%)";
// });
