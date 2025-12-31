// Mobile nav toggle
const burger = document.getElementById("burger");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");

function onScroll() {
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);

    if (scrollPos >= top && scrollPos < top + height) {
      link?.classList.add("active");
    } else {
      link?.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();

// Simple contact form handler
const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! I will get back to you soon.");
    form.reset();
  });
}

