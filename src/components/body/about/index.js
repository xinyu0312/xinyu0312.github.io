import React from "react";
import Separator from "../../common/separator/index";
import "./about.css";
import {AboutData} from "../../data/about";
import AboutCard from "./about-card";
import {EducationData} from "../../data/education";
import EducationCard from "./education-card";

function About() {
  const data = AboutData;
  const data2 = EducationData
  return (
    <div className="about">
      <Separator />
    <label className="section-title">About Me</label>
    {/* <div className="about-section-title">Profile</div> */}
    <p>Currently I have a job, but am open to a new Software Engineering/DevOps Engineering/startup opportunities. If you think I'm a good fit, please contant me via <a href="mailto:xs248@gmail.com">xs248@gmail.com</a>.</p>
    <div className="about-section-title">Education</div>

      <div>
        {data2.map((education) => {
          return <EducationCard education={education} />;
        })}
      </div>
    
      <div className="about-section-title">Skills</div>
    <div className="about-container">
      {data.map((item) => {
        return (
          <div className="about-section">
            <label className="about-section-subtitle">{item.type}</label>
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