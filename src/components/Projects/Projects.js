import React from 'react';
import springboot from '../../assets/spring.png';
import portfolio from '../../assets/portfolio.png';
import job from '../../assets/job.png';
import rentify from '../../assets/rentify.png';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      img: rentify,
      title: "Real Estate",
      code: "https://github.com/prajakta22s/Rentify-app-wg",
    },
    {
      img: springboot,
      title: "Token Validation using SpringBoot Security",
      code: "https://github.com/prajakta22s/Token-Validation-using-Spring-Boot-Security-JWT-",
    },
    {
      img: portfolio,
      title: "Personal Portfolio Website",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: job,
      title: "Online Job Portal",
      code: "https://github.com/prajakta22s/Online-Job-Portal",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-title">Projects</div>
      <div className="projects-divider"></div>
      <p className="projects-description">
        I have worked on a wide range of projects. From Front End to Back End. Here are some of my projects.
      </p>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <img src={project.img} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <p className="project-title">{project.title}</p>
              <div className="project-actions">
                <a href={project.code} className="project-button">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
