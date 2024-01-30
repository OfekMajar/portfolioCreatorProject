import React, { useState } from "react";
import EducationDisplay from "../infoDisplays/EducationDisplay";
import WorkExperienceDisplay from "../infoDisplays/WorkExperienceDisplay";
import "./template1.css";
function Template1({ isBig }) {
  const [contactInfo, setContactInfo] = useState({
    firstName: "first Name",
    lastName: "last Name",
    email: "email",
    phone: "050-1575-***",
    aboutMe: `      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Corporis, harum est hic minima quae enim accusantium inventore
    incidunt ipsam cum exercitationem porro velit eum. Cum
    laboriosam saepe facere pariatur tempora.`,
  });
  const [workExpList, setWorkExpList] = useState([
    { companyName: "company Name", role: "role", timeFrame: "Time frame" },
  ]);
  const [educationsList, setEducationsList] = useState([
    {
      institution: "institution Name",
      degree: "degree",
      major: "major",
      graduationYear: "graduation Year",
    },
  ]);
  return (
    <div
      id="temp1Container"className={isBig ? "bigTemplate" : "smallTemplate"}>
      <section className="userFullName">
        <span id="firstName">{contactInfo.firstName}</span>
        <span id="lastName">{contactInfo.lastName}</span>
      </section>
      <section className="content">
        <div className="contentColumn">
          <div className="leftContentColumn">
            <div className="contactInfo">
              <h4>Contact info</h4>
              <ul>
                <li>{contactInfo.email}</li>
                <li>{contactInfo.phone}</li>
              </ul>
            </div>
            <div className="workExperience">
              <h4>Work Experience</h4>
              <div>
                {workExpList.map((item) => {
                  return <WorkExperienceDisplay workExp={item} />;
                })}
              </div>
            </div>
          </div>
          <div className="rightContentColumn">
            <div className="aboutMe">
              <h4>About me</h4>
              <div>{contactInfo.aboutMe}</div>
            </div>
            <div className="education">
              <h4>Education</h4>
              <div>
                {educationsList.map((item) => {
                  return <EducationDisplay education={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template1;
