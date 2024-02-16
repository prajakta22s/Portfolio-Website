import React from "react";
import "./about.css";
import profilePic from "../../assets/aboutImage.png";

const About = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const png = "http://localhost:3000/PrajaktaBhavsar.pdf";

  const downloadFileAtUrl = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Prajakta_Bhavsar_CV.pdf"); // or any other name you wish to give
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };
  return (
    <section id="about" className="about-container">
      <div className="about-profile">
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
      <div className="about-details">
        <div className="header">About</div>

        <h2>WHO AM I ?</h2>
        <br />

        <div className="about-item">
          
          <div className="about-content">
            <h3>R C Patel Institute of Technology, Shirpur</h3>
            <p className="college-degree">
              <strong>BTech</strong>-Computer Engineering
            </p>
            <p className="college-period">Jul 2018 - Jul 2022</p>
            <p className="college-grade">
              <strong>Grade:</strong> 8.89 CGPA
            </p>
            <br />
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:prajakta22sb@gmail.com">prajakta22sb@gmail.com</a>
            </p>
            <p>
              <strong>From:</strong> Maharashtra, India
            </p>

            <p>
              <strong>Phone:</strong> +91 9370293933
            </p>
          </div>
        </div>

        <div className="about-social-links">
          Let's Connect :
          <a
            href="https://www.linkedin.com/in/prajakta-bhavsar/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>{" "}
          </a>
          <a
            href="https://github.com/prajakta22s"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i>{" "}
          </a>
        </div>
        <div className="about-actions">
          <button className="btn" onClick={scrollToContact}>
            Contact Me
          </button>

          <button className="btn" onClick={() => downloadFileAtUrl(png)}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
