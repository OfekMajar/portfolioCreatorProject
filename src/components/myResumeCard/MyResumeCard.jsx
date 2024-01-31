import React from "react";
import "./myResumeCard.css";
import Template1 from "../../assets/Images/template1.png"
function MyResumeCard({ resumeName, selectedTemplate }) {
  return (
    <div className="singleMyResumeCard">
      <img
        src={Template1}
        alt={`template${selectedTemplate}`}
        className="templateOption"
      />
      <p className="myResumeName">{resumeName}</p>
    </div>
  );
}

export default MyResumeCard;
