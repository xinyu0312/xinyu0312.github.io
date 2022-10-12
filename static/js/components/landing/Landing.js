import React from "react";
import "./landing.css";
import github from "../../assets/icon_github.svg";
import linkedin from "../../assets/icon_linkedinx.svg";
import photo from "../../assets/photo.png";

const Landing = () => {
  return (
    <div className={"landing"} id={"landing"}>
      <div className={"landing-container"}>
        <div className={"landing-content"}>
          <p className={"landing-content-intro"}>Hi, my name is</p>
          <h1>Neo Chen</h1>
          <h2>Software engineer @ CMU</h2>
          <p className={"landing-content-description"}>
            Hello, my name is Neo Chen, and I am a graduate student at Carnegie
            Mellon University School of Computer Science. I am enrolled in the
            Master of Software Engineering -- Scalable Systems program.
          </p>
          <div className={"landing-content-icons"}>
            <a href={"https://github.com/neoxchen"}>
              {" "}
              <img src={github} alt={"github"} />
            </a>
            <a href={"https://www.linkedin.com/in/neoc/"}>
              {" "}
              <img src={linkedin} alt={"linkedin"} />
            </a>
          </div>
        </div>

        <div className={"landing-image"}>
          <img src={photo} alt={"profile pic"} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
