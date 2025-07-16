document.addEventListener('DOMContentLoaded', () => {
  const itensAnimados = document.querySelectorAll('.item-animado');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aparecer');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5 
  });

  itensAnimados.forEach(item => {
    observer.observe(item);
  });
});