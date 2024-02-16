import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Experience from "./components/Experience/exp";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Skills from "./components/Skills/skills";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <div id="footer"><Footer/></div>

      </div>
    </>
  );
}

export default App;
