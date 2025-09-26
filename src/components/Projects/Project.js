// components/Projects/Projects.js
import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import './Project.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
const projects = [
  {
    id: 1,
    title: 'Digital Marketing Agency',
    description: 'A fully responsive website of digital marketing agency with separate pages.',
    image: '/images/IDM.webp', // Your actual image
    tags: ['WordPress', 'PHP', 'myphp'],
    category: 'PHP/ WordPress',
    liveLink: 'https://idm.org.uk/',
  },
  {
    id: 2,
    title: 'Digital Marketing Agency',
    description: 'A Digital Marketing Agency Web application.',
    image: '/images/Intellect_works.webp', // Local file
    tags: ['WordPress', 'PHP', 'myphp'],
    category: 'PHP/ WordPress',
    liveLink: 'https://intellectworks.co.uk/',
  },
  {
    id: 3,
    title: 'E-Commerce Store',
    description: 'A modern e-commerce store with user authentication and payment integration.',
    image: '/images/Celebs_Jacket.webp', // Local file
    tags: ['WordPress', 'PHP', 'myphp'],
    category: 'PHP/ WordPress',
    liveLink: 'https://celebsjacket.com/',    
  },
  {
    id: 4,
    title: 'Custom Portfolio Website',
    description: 'The digital marketing agency fully mobile responsive and where company portfolio exhibit.',
    image: '/images/Logos_Pixel.webp', // Local file
    tags: ['PHP', 'Custom Code', 'HTML5,CSS3,Bootstrap'],
    category: 'PHP/ WordPress',
    liveLink: 'https://logospixel.com/',
    githubLink: 'https://github.com/syedahsan2/Logos-Pixels'
  },
  {
    id: 5,
    title: 'E-Commerce Store',
    description: 'A leather jacket e-commerce store with product reviews and admin panel.',
    image: '/images/Moviestar_jacket.webp', // Local file
    tags: ['PHP', 'Custome Code', 'CSS3,HTML5,Bootstrap'],
    category: 'PHP/ WordPress',
    liveLink: 'https://moviestarjacket.com/',  
  },
  {
    id: 6,
    title: 'E-Commerce Store',
    description: 'A leather jacket store with product and reviews add to cart.',
    image: '/images/Pelle_Store.webp', // Local file
    tags: ['Shopify', 'Liquid', 'Customization'],
    category: 'Shopify',
    liveLink: 'https://pellestore.co/',
  },
    {
    id: 7,
    title: 'Art Agency Portfolio',
    description: 'A modern portfolio website with art and responsive design.',
    image: '/images/Vtuber_Station.webp', // Local file
    tags: ['PHP', 'CSS3', 'Portfolio'],
    category: 'PHP/ WordPress',
    liveLink: 'https://vtuberstation.com/',
  },
  {
    id: 8,
    title: 'Digital Portfolio',
    description: 'A modern Digital agency portfolio website with responsive design.',
    image: '/images/Websiteinweek.webp', // Local file
    tags: ['PHP', 'CSS3', 'Design'],
    category: 'PHP/ WordPress',
    liveLink: 'https://websiteinweek.com/',
    
  },
  {
    id: 9,
    title: 'Online Learning Platform',
    description: 'A modern online platform for student who want to learn Quran.',
    image: '/images/Qiraah_Online.webp', // Local file
    tags: ['PHP', 'CSS3', 'Design'],
    category: 'HTML/CSS/Bootstrap',
    liveLink: 'https://syedahsaniw.github.io/Qiraah-Online/',
    githubLink: 'https://github.com/syedahsaniw/Qiraah-Online'
    
  },
  {
    id: 10,
    title: 'Barber Shop',
    description: 'A barber shop where barber showcase there services.',
    image: '/images/barber.webp', // Local file
    tags: ['PHP', 'CSS3', 'Design'],
    category: 'React',
    liveLink: 'https://barber-phi-two.vercel.app/',
    githubLink: 'https://github.com/syedahsan2/barber'
    
  }
  ,
  {
    id: 11,
    title: 'Art Agency Portfolio',
    description: 'A modern portfolio website with art and responsive design(Incompelete).',
    image: '/images/Twitch_graphic.webp', // Local file
    tags: ['PHP', 'CSS3', 'Design'],
    category: 'HTML/CSS/Bootstrap',
    githubLink: 'https://github.com/syedahsan2/Twitch-Graphics'
    
  },
  {
    id: 12,
    title: 'Digital Marketing Agency',
    description: 'The digital marketing agency fully mobile responsive and where company portfolio exhibit.',
    image: '/images/fasts.webp', // Local file
    tags: ['PHP', 'Custom Code', 'HTML5,CSS3,Bootstrap'],
    category: 'PHP/ WordPress',
    liveLink: 'https://faststechnologies.com/',
    githubLink: 'https://github.com/syedahsan2/Logos-Pixels'
  }
];
  const categories = ['all', 'PHP/ WordPress', 'HTML/CSS/Bootstrap', 'Shopify', 'React'];
  
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