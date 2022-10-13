import React from "react";
import "./about-card.css";
function AboutCard({ about }) {
  return (
   <div className="about-card">
     <div className="about-icon">{about.icon}</div>

     <img src={about.image} className="about-image"/>
     <label className="about-name">{about.name}</label>

   </div>
  );
}
export default AboutCard;