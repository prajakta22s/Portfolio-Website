import React from "react";
import "./exp.css";
import aeriestechLogo from '../../assets/atg.png';
import r3systemsLogo from '../../assets/r3sys.png';
const Experience = () => {
  return (
    <><section className="experience-section">
    <div className="experience-title">Experience</div>
    <div className="header-bar"></div>
    <p className="experience-subtitle">
      My work experience as a software engineer and working on different companies and projects.
    </p>
    <div className="experience-container">
      {/* Experience Item 1 */}
      <div className="experience-item">
        <div className="experience-logo">
          <a href="https://aeriestechnology.com/" target="_blank" rel="noopener noreferrer">
            <img src={aeriestechLogo} alt="Aeries Technology Group" />
          </a>
        </div>
        <div className="experience-content">
          <h3>Product & Fullstack Engineer Intern</h3>
          <p className="experience-company">Aeries Technology Group</p>
          <p className="experience-dates">Jul 2023 - Nov 2023</p>
          <p className="experience-description">Worked on project to automate extraction of invoices details.</p>
          <p className="experience-tech">Skills: ● Power Automate ● Power App  ● JavaScript  ● TypeScript</p>
        </div>
      </div>
      
      {/* Experience Item 2 */}
      <div className="experience-item">
        <div className="experience-logo">
          <a href="https://www.r3sys.com/" target="_blank" rel="noopener noreferrer">
            <img src={r3systemsLogo} alt="R3 Systems India" />
          </a>
        </div>
        <div className="experience-content">
          <h3>Core Java Intern</h3>
          <p className="experience-company">R3 SYSTEMS INDIA PRIVATE LIMITED</p>
          <p className="experience-dates">Aug 2022 - Feb 2023</p>
          <p className="experience-description">Worked on project connection to the JDBC</p>
          <p className="experience-tech">Skills: ● Core Java  ● Spring Boot</p>
        </div>
      </div>
    </div>
  </section>
    </>
  );
};

export default Experience;
