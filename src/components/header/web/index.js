import React from "react";
import './web.css';

function Web() {
  return <div className="web">

    <div className="web-option">
        <a href="#top">
        <i class="fi-rr-home option-icon"></i>Home
        </a>
    </div>

    <div className="web-option">
        <a href="#about">
        <i class="fi-rr-user option-icon"></i>About
        </a>
    </div>

    <div className="web-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Work
        </a>
    </div>

    <div className="web-option">
        <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
    </div>

 
    <div className="web-option">
        <a href="#contact">
        <i class="fi fi-rr-user option-icon"></i>Contact
        </a>
    </div>

  </div>;
}

export default Web;