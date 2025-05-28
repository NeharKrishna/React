import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>Prost</h3>
          <p>A Cafe webpage using HTML and CSS</p>
          <a href="https://neharkrishna.github.io/HTML-CSS-TASKS/Project/prost.html" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3>Landy</h3>
          <p>A Website Using HTML and CSS</p>
          <a href="https://neharkrishna.github.io/HTML-CSS-TASKS/Day%206/landy.html" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <h3>Lugx</h3>
          <p>A Gaming Website build using HTML and CSS</p>
          <a href="https://neharkrishna.github.io/HTML-CSS-TASKS/Workshop/gaming.html" target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
