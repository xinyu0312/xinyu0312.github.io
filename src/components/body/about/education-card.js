import React from "react";
import "./education-card.css";
function EducationCard({ education }) {
  return (
    <div className="education-card">
      <div className="education-info">
        <label className="education-name">{education.name}</label>
        {/* <div className="education-period">
          <label>{education.period}</label>
        </div> */}
        <div className = "education-content">
        {/* <p><strong>Cumulative GPA: </strong>{education.gpa}</p>
        <p><strong>Major: </strong>{education.major}</p>
        <p><strong>Minior: </strong>{education.minior}</p> */}
        <p>{education.main}</p>
        
      </div>
      </div>
      <div className="right">
      <img src={education.image} className="education-photo" />
      </div>
      
    </div>
  );
}

export default EducationCard;