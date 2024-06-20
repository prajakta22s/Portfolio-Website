import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-icons">
          <a href="https://github.com/prajakta22s" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/prajakta-bhavsar" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <p className="footer-text">&copy;2024 PSB All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
