import React from "react";

function EducationDisplay(props) {
  // {institution:"institution Name",degree:"degree",major:"major" ,graduationYear:"graduation Year"}
  const { institution, degree, major, graduationYear } = props.education;
  return (
    <div className="displaySingleEducation">
      {institution == "" ? null : <p>institution: {institution}</p>}
      {degree == "" ? null : <p>degree: {degree}</p>}
      {major == "" ? null : <p>major :{major}</p>}
      {graduationYear == "" ? null : <p>graduationYear :{graduationYear}</p>}
    </div>
  );
}

export default EducationDisplay;
