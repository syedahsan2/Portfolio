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
            <span className="title">WordPress & Shopify Developer</span>
          </h1>
          <p className="hero-description">
            I create responsive, high-performing websites using PHP, WordPress, and Shopify.
    With 3+ years of experience, I specialize in customizing themes, 
    optimizing site performance, and maintaining reliable, user-friendly platforms.

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
