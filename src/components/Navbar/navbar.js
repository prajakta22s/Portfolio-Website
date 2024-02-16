import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./navbar.css";
// import logo from "../../assets/p.png"; // Ensure this path is correct

const Navbar = () => {
  const [navFixed, setNavFixed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavFixed(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavLinkClick = (target) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    if (target === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${navFixed ? "navbar-fixed" : ""}`}>
      {/* <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div> */}
      <div className="navbar-mobile-icon" onClick={toggleMobileMenu}>
        <i className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
      </div>
      <ul className={`navbar-links ${mobileMenuOpen ? "navbar-links-active" : ""}`}>
        <li><Link to="home" smooth={true} duration={500} onClick={() => handleNavLinkClick("home")}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={() => handleNavLinkClick("about")}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={() => handleNavLinkClick("skills")}>Skills</Link></li>
        <li><Link to="experience" smooth={true} duration={500} onClick={() => handleNavLinkClick("experience")}>Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={() => handleNavLinkClick("projects")}>Projects</Link></li>
        
      </ul>
      <a href="https://github.com/prajakta22s" target="_blank" rel="noopener noreferrer" className="navbar-github-btn">Github Profile</a>
    </nav>
  );
};

export default Navbar;
