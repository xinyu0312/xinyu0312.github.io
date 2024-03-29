import React from "react";
import "./main.css";
import SocialContact from "../../common/social-contact/index";
function Main() {
  return (
    <div className="main">
      <div className="main-top">
        <div className="main-info">
          Hello There ✋, I am
         <br /> <span className="info-name">Xinyu Shen</span>.
         <br /> I am a Software Engineer/DevOps Engineer.
        </div>
        <div className="main-photo">
          <img 
            src={require("../../../assets/self.jpg")}
            alt = "Xinyu Shen's biography"
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default Main;