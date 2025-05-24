document.addEventListener("DOMContentLoaded", () => {
  const children = document.querySelectorAll('.grid-card > *');

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

  children.forEach(child => observer.observe(child));
});
