import React from "react";
import "./about-card.css";
function AboutCard({ about }) {
  return (
   <div className="about-card">
     <div className="about-icon">{about.icon} </div>
     <div className="about-name">{about.name}</div>
   </div>
  );
}
export default AboutCard;