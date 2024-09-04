document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("[data-menu]");
  const aboutElm = document.querySelector("[data-about]");
  const cancelElm = document.querySelector("[data-cancel]");
  const button = document.querySelector(".btn");

  const path = window.location.pathname;
  const selector = path.split("/")[1];
  console.log(selector);
  const navLinks = document.querySelectorAll("header a");
  const awardsLink = document.querySelector("[href='#awards']");
  const filmLink = document.querySelector("[href='#filmography']");

  if (menuIcon && aboutElm) {
    menuIcon.addEventListener("click", () => {
      const isOpen = aboutElm.style.transform === "translateX(0%)";
      aboutElm.style.transform = isOpen
        ? "translateX(-100%)"
        : "translateX(0%)";
    });
  } else {
    console.error("Menu icon or about element not found.");
  }

  if (cancelElm && aboutElm) {
    cancelElm.addEventListener("click", () => {
      aboutElm.style.transform = "translateX(100%)";
    });
  } else {
    console.error("Cancel element or about element not found.");
  }

  const filmographyElm = document.getElementById("filmography");
  const awardsElm = document.getElementById("awards");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2, // Adjust this value based on when you want the effect to trigger
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const elem = document.querySelector(`a[href="#${id}"]`);
      console.log(entry.target);

      if (entry.isIntersecting) {
        elem.classList.add("active");
        history.pushState(null, "", `#${id}`);
      } else {
        elem.classList.remove("active");
      }
    });
  }, observerOptions);

  // Add observer
  if (filmographyElm && awardsElm) {
    observer.observe(filmographyElm);
    observer.observe(awardsElm);
  } else {
    console.error("Filmography or awards element not found.");
  }
});
