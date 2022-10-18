import React from "react";
import './mobile.css'
function Mobile({ isOpen, setIsOpen}) {
  return (
  <div className="mobile">
    <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
      <i class="fi-rr-cross-circle"></i>
    </div>

    <div className="mobile-option">
        <a href="#main">
        <i class="fi-rr-home option-icon"></i>Home
        </a>
    </div>

    <div className="mobile-option">
        <a href="#about">
        <i class="fi-rr-user option-icon"></i>About
        </a>
    </div>

    <div className="mobile-option">
        <a href="#work">
        <i class="fi-rr-briefcase option-icon"></i>Work
        </a>
    </div>

    <div className="mobile-option">
    <a href="#projects" >
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
    </div>

    <div className="mobile-option">
        <a href="#contact">
        <i class="fi-rr-envelope option-icon"></i>Contact
        </a>
    </div>
  </div>
  );
}

export default Mobile;