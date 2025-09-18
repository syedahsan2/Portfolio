// components/Projects/Projects.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Project.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
      image: 'https://via.placeholder.com/400x250/4F46E5/FFFFFF?text=E-Commerce+App',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A drag-and-drop task management application with real-time updates.',
      image: 'https://via.placeholder.com/400x250/10B981/FFFFFF?text=Task+App',
      tags: ['React', 'Firebase', 'Tailwind'],
      category: 'web'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather information with 5-day forecast and location search.',
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Weather+App',
      tags: ['React', 'API', 'Chart.js'],
      category: 'web'
    },
    {
      id: 4,
      title: 'Fitness Tracker',
      description: 'Workout tracking application with progress charts and personalized recommendations.',
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=Fitness+App',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'Discover recipes based on ingredients you have with step-by-step instructions.',
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Recipe+App',
      tags: ['React', 'API', 'Material UI'],
      category: 'web'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern portfolio website with animations and responsive design.',
      image: 'https://via.placeholder.com/400x250/EC4899/FFFFFF?text=Portfolio',
      tags: ['React', 'CSS3', 'Framer Motion'],
      category: 'web'
    }
  ];

  const categories = ['all', 'web', 'mobile', 'design'];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;