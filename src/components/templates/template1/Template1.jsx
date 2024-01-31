import React, { useState } from "react";
import EducationDisplay from "../infoDisplays/EducationDisplay";
import WorkExperienceDisplay from "../infoDisplays/WorkExperienceDisplay";
import "./template1.css";
function Template1({ isSmall ,isPreview,workExp,educations,contactInfo}) {
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
  return (
    <div id="temp1Container"className={isSmall ? "smallTemplate" : "bigTemplate"}>
        {/* checks if its a preview or not */}
        {isPreview?<div> <section className="userFullName">
        <span id="firstName">{previewContactInfo.firstName}</span>
        <span id="lastName">{previewContactInfo.lastName}</span>
      </section>
      <section className="content">
        <div className="contentColumn">
          <div className="leftContentColumn">
            <div className="previewContactInfo">
              <h4 className="categoryHeader">Contact info</h4>
              <ul>
                <li>{previewContactInfo.email}</li>
                <li>{previewContactInfo.phone}</li>
              </ul>
            </div>
            <div className="workExperience">
              <h4 className="categoryHeader">Work Experience</h4>
              <div>
                {previewWorkExpList.map((item) => {
                  return <WorkExperienceDisplay workExp={item} />;
                })}
              </div>
            </div>
          </div>
          <div className="rightContentColumn">
            <div className="aboutMe">
              <h4 className="categoryHeader">About me</h4>
              <div>{previewContactInfo.aboutMe}</div>
            </div>
            <div className="education">
              <h4 className="categoryHeader">Education</h4>
              <div>
                {previewEducationsList.map((item) => {
                  return <EducationDisplay education={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section></div>:
      <div> <section className="userFullName">
      <span id="firstName">{contactInfo.firstName}</span>
      <span id="lastName">{contactInfo.lastName}</span>
    </section>
    <section className="content">
      <div className="contentColumn">
        <div className="leftContentColumn">
          <div className="contactInfo">
            <h4 className="categoryHeader">Contact info</h4>
            <ul>
              <li>{contactInfo.email}</li>
              <li>{contactInfo.phoneNumber}</li>
            </ul>
          </div>
          <div className="workExperience">
            <h4 className="categoryHeader">Work Experience</h4>
            <div>
              {workExp.map((item) => {
                return <WorkExperienceDisplay workExp={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="rightContentColumn">
          <div className="aboutMe">
            <h4 className="categoryHeader">About me</h4>
            <div>{contactInfo.aboutMe}</div>
          </div>
          <div className="education">
            <h4 className="categoryHeader">Education</h4>
            <div>
              {educations.map((item) => {
                return <EducationDisplay education={item} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section></div>}
     
    </div>
  );
}

export default Template1;
