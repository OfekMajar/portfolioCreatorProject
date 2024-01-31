import React from "react";
import "./myResumeCard.css";
import Template1Img from "../../assets/Images/template1.png";
import Template2Img from "../../assets/Images/template2.png";
import { useNavigate } from "react-router-dom";

function MyResumeCard({ resumeName, selectedTemplate, resumeId }) {
  const navigate = useNavigate();
  const goToSinglePage = () => {
    navigate(`/MyResumes/${resumeId}`);
  };
  console.log(resumeId);
  return (
    <div onClick={goToSinglePage} className="singleMyResumeCard">
      {selectedTemplate == 1 ? (
        <img
          src={Template1Img}
          alt={`template${selectedTemplate}`}
          className="templateOption"
        />
      ) : (
        <img
          src={Template2Img}
          alt={`template${selectedTemplate}`}
          className="templateOption"
        />
      )}

      <p className="myResumeName">{resumeName}</p>
    </div>
  );
}

export default MyResumeCard;
