import React from "react";
import springboot from "../../assets/spring.png";
import portfolio from "../../assets/portfolio.png";
import job from "../../assets/job.png";
import "./projects.css";
const Projects = () => {
  const projects = [
    {
      img: springboot,
      title: "Token Validation using SpringBoot Security",
      desc: " Designed and developed a Java API endpoint focused on token validation using Spring Boot Security. ",
      
      code: "https://github.com/prajakta22s/Token-Validation-using-Spring-Boot-Security-JWT-",
    },
    {
      img: portfolio,
      title: "Portfolio",
      desc: " Build an impressive online portfolio using React, featuring a fully responsive design for optimal viewing on all devices.",
      
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: job,
      title: "Online Job Portal",
      desc: "Built an online job portal in Java, bridging industries with potential candidates and ensuring the right fit for both.",
      
      code: "https://github.com/prajakta22s/Online-Job-Portal",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-intro">
        <div className="projects-title">Projects</div>
        <div className="header-bar"></div>
        <p className="projects-description">
          I have worked on a wide range of projects. From Front End to Back End
          Here are some of my projects.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card" key={i}>
            <img
              src={project.img}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <p className="project-description">{project.desc}</p>
              <div className="project-actions">
                {/* <a href={project.live} className="btn live-btn">
                  Live
                </a> */}
                <a href={project.code} className="btn code-btn">
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
