function getProjectDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      document.getElementById('project-content').innerHTML = '<p>Project not found.</p>';
      return;
    }
  
    document.getElementById('project-title').textContent = project.title;

    // Conditionally build course info line
    const courseInfo = project.courseInfo || {};
    const courseParts = [];
    if (courseInfo.course) courseParts.push(courseInfo.course);
    if (courseInfo.date) courseParts.push(courseInfo.date);
    if (courseInfo.participants) courseParts.push(`Participants: ${courseInfo.participants}`);
    if (courseInfo.supervisors) courseParts.push(`Supervisor(s): ${courseInfo.supervisors}`);

    const courseInfoLine = courseParts.length
      ? `<div class="course-info-line">
          ${courseParts.join(' | ')}
        </div>`
      : '';

    const content = document.getElementById('project-content');
    content.innerHTML = `
      ${courseInfoLine}
      <div class="project-flex-row">
      <div class="project-description">
        ${project.details}
      </div>
      <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
      </div>
      <a href="index.html" class="btn btn-accent">Back to Projects</a>
      <div class="project-images">
        ${project.images.map(img => `
          <img src="${img}" alt="${project.title}" class="project-image">
        `).join('')}
      </div>
    `;
}

document.addEventListener('DOMContentLoaded', getProjectDetails);