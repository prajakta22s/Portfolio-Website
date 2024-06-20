import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavFixed(true);
      } else {
        setNavFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setNavVisible(false);
    setMobileMenuOpen(false);
    setTimeout(() => {
      setNavVisible(true);
    }, 300);
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${navFixed ? 'navbar-fixed' : ''} ${navVisible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">Portfolio</Link>
        </div>
        <div className={`navbar-links ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/skills" className="navbar-link">Skills</Link>
          <Link to="/experience" className="navbar-link">Experience</Link>
          <Link to="/projects" className="navbar-link">Projects</Link>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </div>
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} navbar-icon`}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;