import React, { useState, useEffect } from 'react';
import profileImage from '../../assets/ppsb.png';
import './Home.css';

const phrases = [' ReactJS Developer', ' Full-stack Developer', ' Software Engineer'];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === phrases[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  const downloadFileAtUrl = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Prajakta_Bhavsar_CV.pdf");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  const handleDownload = () => {
    const url = "https://drive.google.com/file/d/1TZGo8Q8DTediX_cfpcZNKu19plDr8MpN/view?usp=sharing";
    downloadFileAtUrl(url);
  };

  return (
    <section id="intro" className="home-section">
      <div className="home-container">
        <div className="home-text">
          <span className="home-greeting">Hi, </span>
          <span className="home-name">
            I am <span className="home-highlight">Prajakta Bhavsar</span>
            <br />
          </span>
          <h3 className="home-title">
                        <span className="blink">{`${phrases[index].substring(0, subIndex)}${subIndex === phrases[index].length ? '' : '|'}`}</span>
          </h3>
          <p className="home-description">
            I'm a passionate and dedicated software developer with a strong foundation in both front-end and back-end technologies. With a Bachelor's degree in Computer Engineering and hands-on experience in developing responsive and dynamic web applications, I am committed to creating solutions that enhance user experiences and streamline business processes.
          </p>
          <button className="home-button" onClick={handleDownload}>
            Download CV
          </button>
        </div>
        <div className="home-image-container">
          <img src={profileImage} alt="profile" className="home-image" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Home;
