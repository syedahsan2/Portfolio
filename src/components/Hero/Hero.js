// components/Hero/Hero.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Add this container div */}
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Syed Ahsan</span>
            <span className="title">Front-End & PHP Developer</span>
          </h1>
          <p className="hero-description">
            I build clean, responsive web apps with React and PHP.
            Over 3 years’ experience creating custom WordPress themes and plugins—no drag-and-drop, just solid, 
            performance-focused code.

          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <div className="floating-element"></div>
            <div className="floating-element"></div>
            <div className="floating-element"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;