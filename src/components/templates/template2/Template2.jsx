import React, { useState } from "react";
import EducationDisplay from "../infoDisplays/EducationDisplay";
import WorkExperienceDisplay from "../infoDisplays/WorkExperienceDisplay";
import styles from "./template2.module.css";

function Template2({ isSmall, isPreview, workExp, educations, contactInfo }) {
  const [previewContactInfo, setPreviewContactInfo] = useState({
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "050-1575-***",
    aboutMe: `      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Corporis, harum est hic minima quae enim accusantium inventore
    incidunt ipsam cum exercitationem porro velit eum. Cum
    laboriosam saepe facere pariatur tempora.`,
  });
  const [previewWorkExpList, setPreviewWorkExpList] = useState([
    { companyName: "Company Name", role: "Role", timeFrame: "Time frame" },
  ]);
  const [previewEducationsList, setPreviewEducationsList] = useState([
    {
      institution: "Institution Name",
      degree: "Degree",
      major: "Major",
      graduationYear: "Graduation Year",
    },
  ]);
  const displayContactInfo = isPreview ? previewContactInfo : contactInfo;
  const displayWorkExpList = isPreview ? previewWorkExpList : workExp;
  const displayEducationsList = isPreview ? previewEducationsList : educations;

  return (
    <div
      id={styles.temp2Container}
      className={`actual-receipt`}>
      <div className={styles.allContentContainer}>
        <section className={styles.userFullName}>
          <span id="firstName">{displayContactInfo.firstName}</span>
          <span id="lastName">{displayContactInfo.lastName}</span>
        </section>
        <section className={styles.content}>
          <div className={styles.contentColumn}>
            <div className={styles.contactInfo}>
              <h4 className={styles.categoryHeader}>Contact Info</h4>
              <ul>
                <li>{displayContactInfo.email}</li>
                <li>{displayContactInfo.phoneNumber}</li>
              </ul>
            </div>
            <div className={styles.workExperience}>
              <h4 className={styles.categoryHeader}>Work Experience</h4>
              <div>
                {displayWorkExpList.map((item) => {
                  return <WorkExperienceDisplay workExp={item} />;
                })}
              </div>
            </div>
            <div className={styles.education}>
              <h4 className={styles.categoryHeader}>Education</h4>
              <div>
                {displayEducationsList.map((item) => {
                  return <EducationDisplay education={item} />;
                })}
              </div>
            </div>
            <div className={styles.aboutMe}>
              <h4 className={styles.categoryHeader}>About Me</h4>
              <div>{displayContactInfo.aboutMe}</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Template2;
