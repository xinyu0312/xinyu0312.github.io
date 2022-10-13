import React from "react";
import "./about-card.css";
function SkillCard({ about }) {
  return (
   <div className="about-card">
     <div className="about-icon">{about.icon}</div>
     <label className="about-name">{about.name}</label>
   </div>
  );
}
export default SkillCard;