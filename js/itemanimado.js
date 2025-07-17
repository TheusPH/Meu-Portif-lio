document.addEventListener('DOMContentLoaded', () => {
  const itensAnimados = document.querySelectorAll('.item-animado');

  const isMobile = window.innerWidth <= 767;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: isMobile ? 0.1 : 0.5,
    rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
  });

  itensAnimados.forEach(item => {
    observer.observe(item);
  });
});