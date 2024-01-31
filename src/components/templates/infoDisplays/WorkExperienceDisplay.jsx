import React from "react";

function WorkExperienceDisplay(props) {
  const { companyName, role, timeFrame } = props.workExp;
  return (
    <div className="displaySingleWorkExp">
      {companyName == "" ? null : <p>Company Name: {companyName}</p>}
      {role == "" ? null : <p>Role: {role}</p>}
      {timeFrame == "" ? null : <p>Time Frame: {timeFrame}</p>}
    </div>
  );
}

export default WorkExperienceDisplay;
