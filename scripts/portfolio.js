// Reveal Button Behavior
const revealBtn = document.getElementById('reveal-btn');
const introSection = document.querySelector('.portfolio-intro');
const gallerySection = document.getElementById('portfolio-gallery');

revealBtn.addEventListener('click', () => {
  introSection.style.display = 'none';
  gallerySection.style.display = 'block';

  // Re-trigger scroll observer in case some cards are already in view
  document.querySelectorAll('.flip-card').forEach(card => {
    observer.observe(card);
  });
});

// Scroll Animation: Cards fade in as they come into view
const cards = document.querySelectorAll('.flip-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // only animate once
    }
  });
}, {
  threshold: 0.1
});