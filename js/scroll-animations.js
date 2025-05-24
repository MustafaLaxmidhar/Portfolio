document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = [
  ...document.querySelectorAll('.grid-card > *'),
  ...document.querySelectorAll('.gallery-animate')
  ]

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -30% 0px",
  });

  animatedElements.forEach(el => observer.observe(el));
});
