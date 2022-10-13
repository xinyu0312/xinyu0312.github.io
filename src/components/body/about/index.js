import React from "react";
import Separator from "../../common/separator/index";
import "./about.css";
import {AboutData} from "../../data/about";
import AboutCard from "./about-card";
function About() {
  const data = AboutData;
  return (
    <div className="about">
      <Separator />
    <label className="section-title">About Me</label>
    
    <div className="about-section-title">Education</div>
    <p>Todo Add info</p>
    <div className="about-container">
      {data.map((item) => {
        return (
          <div className="about-section">
            <label className="about-section-title">{item.type}</label>
            <div className="about-list">
              {item.list.map((about) => {
                return <AboutCard about={about} />;
              })}
            </div>

          </div>
        );
      })}
    </div>

   
  </div>
 );
}

export default About;