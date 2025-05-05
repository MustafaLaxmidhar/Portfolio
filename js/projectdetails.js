function getProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
      return;
    }
  
    document.getElementById('project-title').textContent = project.title;
    
    const content = document.getElementById('project-content');
    content.innerHTML = `
      <div class="project-images">
        ${project.images.map(img => `
          <img src="${img}" alt="${project.title}" class="project-image">
        `).join('')}
      </div>
      <div class="project-description">
        ${project.details}
      </div>
    `;
  }
  
  document.addEventListener('DOMContentLoaded', getProjectDetails);