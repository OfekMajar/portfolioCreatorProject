import React from "react";

function WorkExperienceDisplay(props) {
  const { companyName, role, timeFrame } = props.workExp;
  return (
    <div className="displaySingleWorkExp">
      <p>{companyName}</p>
      <p>{role}</p>
      <p>{timeFrame}</p>
    </div>
  );
}

export default WorkExperienceDisplay;
