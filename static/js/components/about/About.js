import React from "react";
import "./about.css";
import hexagons from "../../assets/hexagon_cluster.png";

const About = () => {
  return (
    <div className={"about"} id={"about"}>
      <div className={"about-container"}>
        <div className={"about-content"}>
          <h1>About Me</h1>
          <div className={"divider"} />
          <p>
            Hello, my name is Neo Chen, and I am a graduate student at Carnegie
            Mellon University School of Computer Science. I am enrolled in the
            Master of Software Engineering -- Scalable Systems program.
          </p>
          <br />
          <p>
            I am passionate about applying software engineering and machine
            learning concepts to every-day objects. For example, a smart camera
            that executes different routines whenever I, my cousin, or someone
            else gets home.
          </p>
          <br />
          <p>
            Through various academic courses and internships, I am able to grasp
            skills ranging from requirement gathering and designing scalable
            systems to implementing the features and rolling out to production.
          </p>
        </div>

        <div className={"about-image"}>
          <img src={hexagons} alt={"experiences"} />
        </div>
      </div>
    </div>
  );
};

export default About;
