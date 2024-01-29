import React from "react";

function WorkExperiences(props) {
  const {changeHandler,amoutOfWorkExp} = props
  return (
    <div className="singleWorkExpContainer">
      <div className="lableAndInput">
        <label htmlFor="">Company Name:</label>
        <input
          type="text"
          onChange={changeHandler}
          required
          name={`companyName${amoutOfWorkExp}`}
        />
      </div>
      <div className="lableAndInput">
        <label htmlFor="">Role:</label>
        <input
          type="text"
          onChange={changeHandler}
          required
          name={`role${amoutOfWorkExp}`}
        />
      </div>
      <div className="lableAndInput">
        <label htmlFor="">Time frame:</label>
        <input
          type="text"
          onChange={changeHandler}
          required
          name={`timeFrame${amoutOfWorkExp}`}
        />
      </div>
    </div>
  );
}

export default WorkExperiences;
