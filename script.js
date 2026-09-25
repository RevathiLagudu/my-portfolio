const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();

const themeToggle=document.getElementById("themeToggle");const savedTheme=localStorage.getItem("portfolio-theme");if(savedTheme==="light")document.body.classList.add("light");function updateThemeButton(){if(!themeToggle)return;const light=document.body.classList.contains("light");themeToggle.querySelector(".theme-icon").textContent=light?"☾":"☼";themeToggle.querySelector(".theme-text").textContent=light?"Dark":"Light";themeToggle.setAttribute("aria-label",light?"Switch to dark theme":"Switch to light theme");themeToggle.title=light?"Switch to dark theme":"Switch to light theme"}updateThemeButton();themeToggle?.addEventListener("click",()=>{document.body.classList.toggle("light");localStorage.setItem("portfolio-theme",document.body.classList.contains("light")?"light":"dark");updateThemeButton()});
