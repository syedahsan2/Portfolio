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
    image: '/images/IDM-1.jpg',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'web'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A drag-and-drop task management application with real-time updates.',
    image: '#10B981', // Just use color code instead of URL
    tags: ['React', 'Firebase', 'Tailwind'],
    category: 'web',
    isColor: true // Add this flag
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather information with 5-day forecast and location search.',
    image: '#F59E0B', // Just use color code instead of URL
    tags: ['React', 'API', 'Chart.js'],
    category: 'web',
    isColor: true // Add this flag
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    description: 'Workout tracking application with progress charts and personalized recommendations.',
    image: '#EF4444', // Just use color code instead of URL
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
    isColor: true // Add this flag
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'Discover recipes based on ingredients you have with step-by-step instructions.',
    image: '#8B5CF6', // Just use color code instead of URL
    tags: ['React', 'API', 'Material UI'],
    category: 'web',
    isColor: true // Add this flag
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A modern portfolio website with animations and responsive design.',
    image: '#EC4899', // Just use color code instead of URL
    tags: ['React', 'CSS3', 'Framer Motion'],
    category: 'web',
    isColor: true // Add this flag
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