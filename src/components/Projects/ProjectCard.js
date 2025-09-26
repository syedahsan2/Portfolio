import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card" data-category={project.category}>
      <img 
        src={project.image} 
        alt={project.title}
        style={{ width: '100%', height: '250px', objectFit: 'cover' }}
      />
      
      <div className="project-overlay">
        <div className="project-actions">
          {/* Details Link - Always show */}
          <a 
            href={project.detailsLink || "#"} 
            className="project-action-btn"
            aria-label={`View details of ${project.title}`}
          >
            <i className="fas fa-eye"></i>
          </a>
          
          {/* GitHub Link - Only show if project.githubLink exists */}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              className="project-action-btn"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View code for ${project.title}`}
            >
              <i className="fab fa-github"></i>
            </a>
          )}
          
          {/* Live Demo Link - Only show if project.liveLink exists */}
          {project.liveLink && (
            <a 
              href={project.liveLink} 
              className="project-action-btn"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
        </div>
      </div>
      
      <div className="project-category">
        {project.category}
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">{tag}</span>
          ))}
        </div>
        
        <div className="project-footer">
          <span className="project-date">Jan 2023</span>
          {/* Optional: Add GitHub link in footer too */}
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              className="project-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Code <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;