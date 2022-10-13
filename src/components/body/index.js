import React from "react";
import "./body.css";
import Main from "./main/index";
import Projects from "./projects/index";
import About from "./about/index";
import Work from "./work/index";
import Contact from "./contact/index";

function Body() {
  return (
  <div className="body">
    <section id="main">
      <Main />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="work">
      <Work />
    <section id="projects">
      <Projects />
    </section>
  
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;