import React from 'react';
import './Skills.css';

const skills = [
  {
    category: 'Front-End Technologies',
    skills: [
      { name: 'HTML5', icon: 'devicon-html5-plain colored' },
      { name: 'CSS3', icon: 'devicon-css3-plain colored' },
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'React.js', icon: 'devicon-react-original colored' },
    ],
  },
  {
    category: 'Back-End Technologies',
    skills: [
      { name: 'Java', icon: 'devicon-java-plain colored' },
      { name: 'Python', icon: 'devicon-python-plain colored' },
      { name: 'JDBC', icon: 'devicon-jdbc-plain colored' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    ],
  },
  {
    category: 'Others',
    skills: [
      { name: 'Data Structures and Algorithms', icon: 'devicon-plain colored' },
      { name: 'RESTful API', icon: 'devicon-plain colored' },
    ],
  },
  {
    category: 'Services',
    skills: [
      { name: 'Render', icon: 'devicon-render-plain colored' },
      { name: 'Vercel', icon: 'devicon-vercel-plain colored' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git/GitHub', icon: 'devicon-git-plain colored' },
      { name: 'Postman', icon: 'devicon-postman-plain colored' },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-divider"></div>
          <p className="skills-description">Here are some of my skills on which I have been working on for the past 2 years.</p>
        </div>
        <div className="skills-content">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skills-category">
              <div className="skills-category-card">
                <h3 className="skills-category-title">{skillCategory.category}</h3>
                <div className="skills-items">
                  {skillCategory.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <i className={`${skill.icon} skill-icon`}></i>
                      <p className="skill-name">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
