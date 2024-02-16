import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram,faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* <h2>Prajakta Bhavsar</h2> */}
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          {/* <a href="#education">Education</a> */}
        </div>
        <div className="footer-socials">
          {/* <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a> */}
          <a href="https://github.com/prajakta22s"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/prajakta-bhavsar"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          {/* <a href="https://instagram.com"><FontAwesomeIcon icon={faInstagram} /></a> */}
        </div>
        <p>©2023 PSB<br/> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
