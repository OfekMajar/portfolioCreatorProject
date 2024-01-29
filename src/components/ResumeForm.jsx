import React, { useEffect, useState } from "react";
import WorkExperiences from "./WorkExperiences";
function ResumeForm() {
  const [formData, setFormData] = useState({});
  const [workExpData, setWorkExpData] = useState([{}]);

  const [currentFormStage, setCurrentFormStage] = useState(1);
  const [userData, setUserData] = useState({});
  const [amoutOfWorkExp, setAmoutOfWorkExp] = useState(1);

  const changeContactInfoHandler = (e) => {
    setWorkExpData([...workExpData,{}])
  };

  const changeWorkExpHandler=(e)=>{
    
  }

  const [workExpList, setWorkExpList] = useState([
    <WorkExperiences
      changeHandler={changeWorkExpHandler}
      amoutOfWorkExp={amoutOfWorkExp}
    />,
  ]);

  const createMoreWorkExp = (e) => {
    e.preventDefault();
    setAmoutOfWorkExp(amoutOfWorkExp + 1);
    console.log(amoutOfWorkExp);
    setWorkExpList([
      ...workExpList,
      <WorkExperiences
        changeHandler={changeWorkExpHandler}
        amoutOfWorkExp={amoutOfWorkExp + 1}
      />,
    ]);
  };

  const nextStage = (e) => {
    e.preventDefault();
    userData[e.target.name] = { ...formData };
    setUserData({ ...userData });
    setCurrentFormStage(currentFormStage + 1);
  };

  const prevStage = (e) => {
    e.preventDefault();
    setCurrentFormStage(currentFormStage - 1);
  };
  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  return (
    <form onSubmit={sumbitHandler}>
      {currentFormStage == 1 ? (
        <section id="contactInfoSection">
          <h2>Contact Info:</h2>
          <div>
            <div className="lableAndInput">
              <label htmlFor="">First name</label>
              <input
                onChange={changeContactInfoHandler}
                type="text"
                name="firstName"
                defaultValue={formData.firstName}
              />
            </div>
            <div className="lableAndInput">
              <label htmlFor="">Last name</label>
              <input
                onChange={changeContactInfoHandler}
                type="text"
                name="lastName"
                defaultValue={formData.lastName}
              />
            </div>
          </div>
          <div>
            <div className="lableAndInput">
              <label htmlFor="">Email:</label>
              <input
                onChange={changeContactInfoHandler}
                name="email"
                type="email"
                defaultValue={formData.email}
              />
            </div>
            <div className="lableAndInput">
              <label htmlFor="">Phone number:</label>
              <input
                onChange={changeContactInfoHandler}
                name="phoneNumber"
                type="text"
                defaultValue={formData.phoneNumber}
              />
            </div>
          </div>
          <div className="lableAndInput">
            <label htmlFor="">About me:</label>
            <textarea
              onChange={changeContactInfoHandler}
              name="aboutMe"
              type="text"
              id="aboutMeInput"
            />
          </div>
        </section>
      ) : currentFormStage == 2 ? (
        <section id="workExpContainer">
          <h2>Work experience:</h2>
          {workExpList.map((item) => {
            // console.log();
            return item;
          })}
          <button onClick={createMoreWorkExp}> add Another</button>
        </section>
      ) : currentFormStage == 3 ? (
        <section id="educationContainer">
          <h2>Education</h2>
          <div className="lableAndInput">
            <label htmlFor=""></label>
            <input type="text" />
          </div>
        </section>
      ) : null}
      <section id="nextAndPrevBtns">
        {currentFormStage == 1 ? (
          <div>
            <button onClick={nextStage} name="userContactInfo">
              {" "}
              Next
            </button>
          </div>
        ) : null}
        {currentFormStage == 2 ? (
          <div>
            <button onClick={prevStage}> Prev</button>
            <button onClick={nextStage} name="userWorkExp">
              Next{" "}
            </button>
          </div>
        ) : null}
        {currentFormStage == 3 ? (
          <div>
            <button onClick={prevStage}> Prev</button>
            <button>Sumbit </button>
          </div>
        ) : null}
      </section>
    </form>
  );
}

export default ResumeForm;
