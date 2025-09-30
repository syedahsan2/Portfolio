// components/About/About.js
import React from "react";
import "./About.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const projects = [
  {
    name: "Website in Week",
    description: "Built a fast, responsive business site in under 7 days.",
    tech: "PHP, HTML, CSS",
  },
  {
    name: "Fasts Technology",
    description: "Technology solutions company site with custom UI.",
    tech: "PHP, HTML, CSS",
  },
  {
    name: "Logos Pixel",
    description: "Logo and branding platform with custom WordPress theme.",
    tech: "PHP, HTML, CSS",
  },
  {
    name: "Moviestar Jacket",
    description: "E-commerce store for movie-inspired jackets.",
    tech: "PHP, HTML, CSS",
  },
  {
    name: "Celebs Jacket",
    description: "Celebrity fashion store with custom theme.",
    tech: "WooCommerce, PHP",
  },
  {
    name: "Pelle Store",
    description: "Celebrity fashion store with custom theme.",
    tech: "Shopify, Liquid",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          {/* Top: About text */}
          <div className="about-text">
            <h3>Curious about who I am?</h3>
            <p>
              Front-end developer with over three years of experience in React.js,
              PHP, Next.js, and WordPress. Holds a diploma in Software Engineering
              and is pursuing a BBIT degree while working two developer roles.
              Focuses on clean, responsive interfaces, performance, and security.
            </p>
            <p>
              Key projects include Website in Week, Fasts Technology, Logos Pixel,
              Moviestar Jacket, Celebs Jacket, and multiple custom WordPress
              builds with bespoke themes and plugins.
            </p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
            </div>
          </div>

          {/* Bottom: Projects showcase */}
          <div className="about-skills">
            <h3>Project-Based Skills Showcase</h3>
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              className="skills-slider"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="project-card">
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    <span className="tech">{project.tech}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
