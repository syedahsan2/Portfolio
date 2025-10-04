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
  name: "Celebs Jacket",
  description: "WooCommerce-based celebrity fashion store developed with a custom theme and tailored features.",
  tech: "WooCommerce, PHP"
  },
  {
    name: "Moviestar Jacket",
    description: "E-commerce platform for movie-inspired jackets, built with a custom front-end and backend structure.",
    tech: "PHP, HTML, CSS"
  },
  {
    name: "Logos Pixel",
    description: "Branding and design platform powered by a custom WordPress theme for logo and identity projects.",
    tech: "PHP, HTML, CSS"
  },
  {
    name: "Website in Week",
    description: "High-performance business website designed and deployed in under seven days.",
    tech: "PHP, HTML, CSS"
  },
  {
    name: "Fasts Technology",
    description: "Corporate site for a technology solutions provider, featuring a modern custom UI and responsive design.",
    tech: "PHP, HTML, CSS"
  }
  ,
  {
  name: "Pelle Store",
  description: "Shopify-based celebrity fashion store built with a custom theme and tailored features.",
  tech: "Shopify, Liquid"
  }
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
                <span className="stat-number">10+</span>
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
                pagination={{ clickable: true }}
                breakpoints={{
                  320: { slidesPerView: 1 },   // phones
                  768: { slidesPerView: 2 },   // tablets
                  1024: { slidesPerView: 3 },  // desktops
                }}
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
