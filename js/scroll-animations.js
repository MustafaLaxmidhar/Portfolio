function observeScrollAnimations() {
  // Only select elements that do NOT already have the 'animate' class
  const animatedElements = [
    ...document.querySelectorAll('.grid-card > *:not(.animate)'),
    ...document.querySelectorAll('.gallery-animate:not(.animate)')
  ];

  console.log('Found elements to animate:', animatedElements.length); // Debug line

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: "0px 0px -30% 0px"
  });

  animatedElements.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", observeScrollAnimations);
