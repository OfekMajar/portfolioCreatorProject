import React from "react";
import styles from "./myResumeCard.module.css";
import Template1Img from "../../assets/Images/template1.png";
import Template2Img from "../../assets/Images/template2.png";
import { useNavigate } from "react-router-dom";

function MyResumeCard({ resumeName, selectedTemplate, resumeId }) {
  const navigate = useNavigate();

  const goToSinglePage = () => {
    navigate(`/MyResumes/${resumeId}`);
  };

  return (
    <div onClick={goToSinglePage} className={styles.singleMyResumeCard}>
      <img
        src={selectedTemplate == 1 ? Template1Img : Template2Img}
        alt={`template${selectedTemplate}`}
        className={styles.templateOption}
      />
      <p className={styles.myResumeName}>{resumeName}</p>
    </div>
  );
}

export default MyResumeCard;
