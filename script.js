// Small human-like scroll reveal
const revealEls = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let el of revealEls) {
    const windowH = window.innerHeight;
    const elTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elTop < windowH - revealPoint) {
      el.classList.add('reveal');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Simple project tilt
document.querySelectorAll('.tilt').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const dx = (x - rect.width/2) / (rect.width/2);
    const dy = (y - rect.height/2) / (rect.height/2);
    card.style.transform = `rotateY(${dx*10}deg) rotateX(${-dy*10}deg) scale(1.03)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
});

// Show current year
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();
