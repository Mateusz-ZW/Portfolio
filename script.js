// Puedes usar librerías como AOS.js, pero aquí una animación sencilla:
const fadeIns = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  fadeIns.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
