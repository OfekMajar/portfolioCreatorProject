import React from "react";

function WorkExperiences(props) {
  const { changeHandler } = props;
  return (
    <div className="singleWorkExpContainer">
      <div className="lableAndInput">
        <label htmlFor="">Company Name:</label>
        <input
          type="text"
          onChange={changeHandler}
          required
          name={`companyName`}
        />
      </div>
      <div className="lableAndInput">
        <label htmlFor="">Role:</label>
        <input type="text" onChange={changeHandler} required name={`role`} />
      </div>
      <div className="lableAndInput">
        <label htmlFor="">Time frame:</label>
        <input
          type="text"
          onChange={changeHandler}
          required
          name={`timeFrame`}
        />
      </div>
    </div>
  );
}

export default WorkExperiences;
