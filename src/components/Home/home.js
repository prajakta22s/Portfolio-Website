import React,{ useState, useEffect } from "react";
import "./home.css";
import bg from "../../assets/psb.png";

const phrases = ["  Full-stack Developer", " Software Engineer", " Creative Thinker"];
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
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm
          <span className="introName"> Prajakta Bhavsar</span>
          <br />
          
        </span>
        <h3>
        <h4>I am</h4> - <span className="blink">{`${phrases[index].substring(0, subIndex)}${subIndex === phrases[index].length ? '' : '|'}`}</span>
      </h3>
        <p className="introPara">
          Recent Computer Science Engineering graduate with hands-on experience
          in Java development and Power Apps. Proactive and keen to leverage
          technical and analytical skills in a growth-oriented organization.
        </p>
        <a
          href="https://drive.google.com/file/d/1GIMx_MBRCCchTnAvl6-l9XJ1wJYGGD0K/view?usp=sharing"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          RESUME
        </a>
      </div>
      <div className="profile-pic-container"></div>
      <img src={bg} alt="profile" className="bg" loading="lazy"/>
      <div />
    </section>
  );
};

export default Home;
