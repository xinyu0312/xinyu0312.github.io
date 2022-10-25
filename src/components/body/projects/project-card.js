import React from "react";
import "./project-card.css";
function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-title">{project.title}</label>
        <div className="project-period">
          <label>{project.period}</label>
        </div>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
              <i class="fa-solid fa-globe"></i>Video Demo
              </div>
            </a>
            )}

          {project.link && (
            <a className="project-link" href={project.link}>
              <div className="link-button">
              <i class="fa-solid fa-globe"></i>Website Link
              </div>
            </a>
            )}
            {project.github&& (
              <a className="project-link" href={project.github}>
                <div className="link-button">
                <i class="devicon-github-original colored"></i>Github
              </div>
            </a>
            )}
        </div>
        
        <p>{project.main}</p>
        <div className="project-tags">
          {project.tags.map((tag)=> {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={project.image} className="project-photo" />
    </div>
  );
}

export default ProjectCard;