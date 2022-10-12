import React from "react";
import "./navigation.css";
import logo from "../../assets/logo.png";

const RESUME_URL =
  "https://drive.google.com/file/d/1m1oLoWOtiANUMTGnPahNKIJ1WPXaeMlj/view?usp=sharing";

const Navigation = () => {
  return (
    <div className={"navigation_bar"}>
      <div className={"navigation_bar-logo"}>
        <a href={"#navigation"}>
          <img src={logo} alt={"logo"} />
        </a>
      </div>

      <div className={"navigation_bar-links"}>
        <div className={"navigation_bar-links_components"}>
          <p>
            <a href={"#about"}>About</a>
          </p>
          <p>
            <a href={"#experiences"}>Experiences</a>
          </p>
          <p>
            <a href={"#projects"}>Projects</a>
          </p>
        </div>
        <div className={"navigation_bar-links-resume"}>
          <button
            type={"button"}
            onClick={() => window.open(RESUME_URL, "_blank")}
          >
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
