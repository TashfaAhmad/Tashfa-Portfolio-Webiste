const menuToggle = document.getElementById('menu-toggle');
const navOverlay = document.getElementById('nav-overlay');
const body = document.body;
const overlayNavList = document.querySelector('.overlay-nav ul');

menuToggle.addEventListener('click', () => {
  navOverlay.classList.toggle('active');
  menuToggle.classList.toggle('open');

  // Scroll lock
  if (navOverlay.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }

  // Trigger fade-in on nav links
  if (navOverlay.classList.contains('active')) {
    overlayNavList.classList.add('active');
  } else {
    overlayNavList.classList.remove('active');
  }
});


// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});