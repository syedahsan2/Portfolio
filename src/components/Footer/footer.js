// components/Footer/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
           <Link to="/" className="logo">
              <img src="/Logo.png" alt="Portfolio Logo" style={{ height: '40px' }} />
            </Link>
            <p className="footer-description">
              Creating beautiful, functional, and responsive web applications with modern technologies.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="www.linkedin.com/in/syed-ahsan-developer/" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/projects" onClick={scrollToTop}>Projects</Link></li>
              <li><Link to="/about" onClick={scrollToTop}>About</Link></li>
              <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
            </ul>
          </div>

          

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <p><i className="fas fa-envelope"></i> ahsanzahid106@gmail.com</p>
              <p><i className="fas fa-phone"></i> +92 331 2481674</p>
              <p><i className="fas fa-map-marker-alt"></i> Karachi, PK</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} DevPortfolio. All rights reserved.</p>
            <p>Designed & Developer by Syed Ahsan</p>
          </div>
          <button 
            className="back-to-top" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;