const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
menuBtn?.addEventListener("click", () => {
  const open = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!open));
  nav.classList.toggle("mobile-open", !open);
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  nav.classList.remove("mobile-open");
  menuBtn?.setAttribute("aria-expanded","false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
