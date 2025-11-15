// components/About/About.js
import React from "react";
import "./About.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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
    tech: "Shopify, Liquid"
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
const jobExperience = [
  {
    company: "Fasts Technologies",
    position: "Senior Web Developer",
    period: "2024 – Present | Night Shift",
    description: "I handled complete client projects end-to-end from front-end and back-end development to customization, bug fixing, and full website optimization.",
    achievements: ["Successfully delivered multiple client websites single-handedly, including landing pages, business sites, and e-commerce stores.", 
      "Improved website performance across projects, achieving significantly faster load times and better Lighthouse scores.",
       "Built clean, responsive interfaces that improved user engagement and overall project satisfaction."]
  },
  {
    company: "Maccers International",
    position: "Senior Front-End Developer", 
    period: "2024 – Present | Morning Shift",
    description: "Developed and optimized fully customized WordPress and Shopify e-commerce websites, implementing unique client designs and custom functionality.",
    achievements: ["Delivered fully customized Shopify and WordPress sites exactly matching client design requirements.", 
      "Built custom Liquid and WordPress code for functionalities not available in standard themes", 
      "Optimized website speed and performance, improving user experience across devices."]
  },
  {
    company: "Intellect Works International",
    position: "Intern to Assistant Project Manager",
    period: "2022 – 2024", 
    description: "Led small design and development teams to deliver projects on time while maintaining quality standards.",
    achievements: ["Led small design and development teams to deliver projects on time while maintaining quality standards.",
       "Acted as main liaison between clients and developers, clarifying requirements and providing updates.", 
       "Improved client platforms by enhancing features and optimizing scalability."]
  }
];
function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });
  }, []);
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text">
            <h3>Curious about who I am?</h3>
            <p>
              I am a front-end developer with over three years of experience, primarily working on Shopify (theme customization, Liquid, UX Builder) and WordPress (customizations and PHP integration). 
              I also have basic hands-on experience with React from past team-based projects. My work focuses on 
              building responsive, clean, and optimized user interfaces with strong emphasis on performance, security, and usability.
            </p>
            <p>
              Key projects include Website in Week, Fasts Technology, Logos Pixel, Moviestar Jacket, Celebs Jacket, and multiple WordPress and Shopify sites 
              where I handled advanced customizations, speed optimization, and overall front-end development.
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
          <div className="experience-section" data-aos="fade-up">
            <h3>Work Experience</h3>
            <div className="timeline">
              {jobExperience.map((job, index) => (
                <div 
                  key={index} 
                  className="timeline-item"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={index * 200}
                >
                  <div className="timeline-content">
                    <h4>{job.position}</h4>
                    <h5>{job.company}</h5>
                    <span className="period">{job.period}</span>
                    <p>{job.description}</p>
                    <ul>
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
