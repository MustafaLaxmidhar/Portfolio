document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Optional: Animate only once
      }
    });
  });

  document.querySelectorAll('.grid-card').forEach(card => {
    observer.observe(card);
  });
});
