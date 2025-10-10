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
            <span className="title">Front-End Developer</span>
          </h1>
          <p className="hero-description">
            I develop responsive and user-friendly websites using PHP, React, and Shopify. With over 3 years of hands-on experience, 
            I specialize in building custom WordPress themes and plugins from scratch, 
            ensuring clean structure, strong performance, and reliable functionality

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