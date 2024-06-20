import React from 'react';
import aeriestechLogo from '../../assets/atg.png';
import './Exp.css';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-title">Experience</div>
      <div className="experience-divider"></div>
      <p className="experience-intro">My work experience as a software engineer and working on different companies and projects.</p>
      <div className="experience-items">
        <div className="experience-item">
          <div className="experience-logo">
            <a href="https://aeriestechnology.com/" target="_blank" rel="noopener noreferrer">
              <img src={aeriestechLogo} alt="Aeries Technology Group" className="experience-logo-img" />
            </a>
          </div>
          <div className="experience-details">
            <h3 className="experience-position">Associate Software Engineer</h3>
            <p className="experience-company">Aeries Technology Group</p>
            <p className="experience-dates">Jul 2022 - Nov 2023</p>
            <p className="experience-description">
              • Worked with clients to understand their needs, translating requirements into functional websites and applications, and providing regular updates to ensure timely project delivery.<br />
              • Designed and developed responsive websites from using HTML, CSS, JavaScript, React, and Bootstrap, ensuring optimal user experience.<br />
              • Enhanced operational efficiency by 30% through process automation using Power Automate, streamlining email attachment extraction, file sorting, and SharePoint integration.<br />
              • Developed secure RESTful APIs for functionalities such as user authentication and authorization.<br />
              • Deployed and managed web applications, ensuring optimal performance and scalability, while actively contributing to various development projects.
            </p>
            <p className="experience-skills">Skills: ● ReactJS ● MongoDB ● NodeJS ● Power Automate ● Power App</p>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-logo"></div>
          <div className="experience-details">
            <h3 className="experience-position">Software Developer</h3>
            <p className="experience-company">Freelancer</p>
            <p className="experience-dates">Aug 2020 - Present</p>
            <p className="experience-description">
              • Collaborated with clients to understand their business objectives and translate requirements into functional websites and applications.<br />
              • Designed and developed custom websites from scratch, ensuring responsiveness and optimal user experience across devices.<br />
              • Implemented features and functionality using a combination of front-end and back-end technologies.<br />
              • Communicated regularly with clients to provide progress updates, gather feedback, and make necessary adjustments to deliver projects on time and within budget.
            </p>
            <p className="experience-skills">Skills: ● HTML ● CSS ● JavaScript ● ReactJS ● Core Java ● Spring Boot</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
