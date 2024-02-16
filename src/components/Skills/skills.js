
import React from 'react'
import './skills.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <section className="skills-section">
        <div className="skills-container">
          <div className="skills-title">Skills</div>
          <div className="header-bar"></div>
          <p className="skills-paragraph">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
          <br/>
          <div className="skills-grid">
          <Slider {...settings}>
            <div className="skill-item">
              <i className="devicon-html5-plain colored skill-icon"></i>
              <p>HTML5</p>
            </div>
            <div className="skill-item">
              <i className="devicon-css3-plain colored skill-icon"></i>
              <p>CSS3</p>
            </div>
            <div className="skill-item">
              <i className="devicon-javascript-plain colored skill-icon"></i>
              <p>JavaScript</p>
            </div>
            <div className="skill-item">
              <i className="devicon-react-plain colored skill-icon"></i>
              <p>ReactJs</p>
            </div>
            <div className="skill-item">
              <i className="devicon-java-plain colored skill-icon"></i>
              <p>Java</p>
            </div>
            <div className="skill-item">
              <i className="devicon-python-plain colored skill-icon"></i>
              <p>Python</p>
            </div>
            <div className="skill-item">
              <i className="devicon-mysql-plain colored skill-icon"></i>
              <p>MySQL</p>
            </div>
            
            <div className="skill-item">
              <i className="devicon-bootstrap-plain colored skill-icon"></i>
              <p>Bootstrap</p>
            </div>
            <div className="skill-item">
              <i className="devicon-git-plain colored skill-icon"></i>
              <p>Git</p>
            </div>
            <div className="skill-item">
              <i className="devicon-github-plain skill-icon"></i>
              <p>GitHub</p>
            </div>
            <div className="skill-item">
              <i className="devicon-vscode-plain colored skill-icon"></i>
              <p>VS Code</p>
            </div>
            </Slider>
            {/* ... more skills */}
          </div>
          
        </div>
      </section>
    
    </>
  )
}

export default Skills