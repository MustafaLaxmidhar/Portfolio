const projects = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    description: "A responsive portfolio website built with HTML, CSS, and JavaScript.",
    thumbnail: "assets/images/projects/portfolio-thumb.jpg",
    images: [
      "assets/images/projects/portfolio-1.jpg",
      "assets/images/projects/portfolio-2.jpg"
    ],
    details: "This portfolio website showcases my work and skills. Built using modern web technologies..."
  },
  // Add more projects here following the same structure
];

function renderProjectCards() {
  const container = document.querySelector('.projects-container');
  
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="project-details.html?id=${project.id}" class="btn btn-primary">Learn More</a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderProjectCards);