const barIcon = document.querySelector(".nav-icon");
const navbar = document.querySelector(".header-section");
const close = document.querySelector(".close");
const navlinklist = document.querySelectorAll(".nav-link");

close.addEventListener("click", function () {
  navbar.classList.remove("navOpen");
});

barIcon.addEventListener("click", function () {
  navbar.classList.toggle("navOpen");
});

navlinklist.forEach((navlinkEL) => {
  navlinkEL.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    navlinkEL.classList.add("active");
    navbar.classList.remove("navOpen");
  });
});

var typed = new Typed(".auto-type", {
  strings: [" Font End Developer", " Web Designer", " React Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 1500,
  delay: 400,
});

// ScrollReveal().reveal(".nav-container .nav-logo", {
//   reset: false,
// });

ScrollReveal().reveal(".main-title", {
  delay: 400,
  origin: "left",
  opacity: 0,
  interval: "500",
});

// ScrollReveal().reveal(".header-section ul li", {
//   origin: "top",
//   interval: "400",
//   reset: false,
// });

ScrollReveal().reveal(".main-icon .main-link-list a", {
  delay: 200,
  origin: "top",
  interval: "300",
});

ScrollReveal().reveal(".about-container .about-img", {
  origin: "top",
  delay: 300,
});

ScrollReveal().reveal(".about-content .about-title", {
  origin: "right",
});

ScrollReveal().reveal(".card-content .card", {
  delay: 300,
  origin: "top",
  interval: "500",
});

ScrollReveal().reveal(".skill-container", {
  origin: "top",
});

ScrollReveal().reveal(".skill-content .skill-list", {
  origin: "left",
});

ScrollReveal().reveal(".skill-list span", {
  delay: 300,
  origin: "left",
  interval: "500",
});

ScrollReveal().reveal(".contact-container", {
  origin: "left",
});

ScrollReveal().reveal(".contact-container .contact-icon .contact-icon-list", {
  origin: "top",
  interval: "300",
});

ScrollReveal().reveal(".contact-container .contact-input .input-form", {
  origin: "right",
  interval: "300",
});

ScrollReveal().reveal(".contact-container .contact-btn", {
  origin: "bottom",
});

ScrollReveal().reveal(".footer-content .footer-icon i", {
  origin: "left",
  interval: "200",
});

ScrollReveal().reveal(".footer-content .footer-link a", {
  origin: "top",
  interval: "200",
});

ScrollReveal().reveal(".footer-content .footer-game li", {
  origin: "right",
  interval: "200",
});
