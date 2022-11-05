import React from "react";
import "./about-card.css";
function AboutCard({ about }) {
  return (
   <div className="about-card">
     <div className="about-icon">{about.icon} </div>
   <img src={about.image} className="about-image"/>
     <div className="about-name">{about.name}</div>
   </div>
  );
}
export default AboutCard;