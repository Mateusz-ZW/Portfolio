// Efecto fade-in en scroll
const fadeEls = document.querySelectorAll('.fade-in');
const options = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
}, options);

fadeEls.forEach(el => observer.observe(el));

