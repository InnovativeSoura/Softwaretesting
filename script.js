const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const body = document.body;

function toggleMenu() {
  const isOpen = menu.classList.toggle("active");

  menuBtn.classList.toggle("active");
  overlay.classList.toggle("active");
  body.classList.toggle("no-scroll");

  // Accessibility updates
  menuBtn.setAttribute("aria-expanded", isOpen);
  menu.setAttribute("aria-hidden", !isOpen);
}

// Toggle menu
menuBtn.addEventListener("click", toggleMenu);

// Close on overlay click
overlay.addEventListener("click", toggleMenu);

// Close on ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu.classList.contains("active")) {
    toggleMenu();
  }
});