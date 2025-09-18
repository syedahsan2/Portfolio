import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  // Check if we're using a color instead of image URL
  const isColorPlaceholder = project.image.startsWith('#') || project.isColor;

  return (
    <div className="project-card" data-category={project.category}>
      <div className="project-image">
        {isColorPlaceholder ? (
          // Show colored div instead of image
          <div 
            className="color-placeholder"
            style={{ backgroundColor: project.image }}
          >
            <span>{project.title}</span>
          </div>
        ) : !imageError ? (
          // Show actual image
          <img
            src={project.image}
            alt={project.title}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={imageLoaded ? 'loaded' : ''}
          />
        ) : (
          // Show error placeholder
          <div className="project-image-placeholder">
            <i className="fas fa-image"></i>
            <span>Image not available</span>
          </div>
        )}
        
        <div className="project-overlay">
          <div className="project-actions">
            <a href="#view" className="project-action-btn" aria-label={`View details of ${project.title}`}>
              <i className="fas fa-eye"></i>
            </a>
            <a href="#github" className="project-action-btn" aria-label={`View code for ${project.title}`}>
              <i className="fab fa-github"></i>
            </a>
            <a href="#live" className="project-action-btn" aria-label={`View live demo of ${project.title}`}>
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        
        <div className="project-category">
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="project-footer">
          <span className="project-date">Jan 2023</span>
          <div className="project-links">
            <a href="#details" className="project-link">
              View Project <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;