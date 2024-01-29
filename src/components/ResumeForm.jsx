import React, { useEffect, useState,useContext } from "react";
import WorkExperiences from "./WorkExperiences";
import Educations from "./Educations";
import {UserContext} from "../context/User";
function ResumeForm() {
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({});
  const [workExpData, setWorkExpData] = useState({});
  const [workExpList, setWorkExpList] = useState([]);
  const [educationData, setEducationData] = useState({});
  const [educationsList, setEducationsList] = useState([]);
  const [currentFormStage, setCurrentFormStage] = useState(1);
  const [userData, setUserData] = useState({userId:"T"});
  //*Change handlers
  const changeContactInfoHandler = (e) => {
    formData[e.target.name] = e.target.value;
    setFormData({ ...formData });
    console.log(formData);
  };

  const handleWorkExp = (e) => {
    workExpData[e.target.name] = e.target.value;
    setWorkExpData({ ...workExpData });
    console.log(workExpData);
  };
  const handleChangeEducation = (e) => {
    educationData[e.target.name] = e.target.value;
    setEducationData({ ...educationData });
    console.log(educationData);
  };
  //*
  //* rendering and adding more educations and work experiences
  const [workExpRederList, setWorkExpRederList] = useState([]);
  const [educationRenderList, setEducationRenderList] = useState([]);
  const createMoreWorkExp = (e) => {
    setWorkExpList([...workExpList, workExpData]);
    setWorkExpRederList([
      ...workExpRederList,
      <WorkExperiences changeHandler={handleWorkExp} />,
    ]);
  };

  const createMoreEducation = (e) => {
    setEducationsList([...educationsList, educationData]);
    setEducationRenderList([
      ...educationRenderList,
      <Educations changeHandler={handleChangeEducation} />,
    ]);
  };

  useEffect(() => {
    createMoreWorkExp();
    createMoreEducation();
  }, []);
  //*
  const nextStage = (e) => {
    switch (currentFormStage) {
      case 1:
        userData[e.target.name] = { ...formData };
        setUserData({ ...userData });
        setCurrentFormStage(currentFormStage + 1);

        break;
      case 2:
        {
          userData[e.target.name] = [...workExpList];
          setUserData({ ...userData });
          setCurrentFormStage(currentFormStage + 1);
        }
        break;
      case 3:
        {
          userData[e.target.name] = [...educationsList];
          setUserData({ ...userData });
        setCurrentFormStage(currentFormStage + 1);
        }
        break;
      default:
        break;
    }
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
          {workExpRederList.map((item) => {
            return item;
          })}
          <button name="workExp" onClick={createMoreWorkExp}>
            {" "}
            add Another
          </button>
        </section>
      ) : currentFormStage == 3 ? (
        <section id="educationContainer">
          <h2>Education</h2>
          {educationRenderList.map((item) => {
            return item;
          })}
          <button type="button" name="education" onClick={createMoreEducation}>
            {" "}
            add Another
          </button>
        </section>
      ) : null}
      <section id="nextAndPrevBtns">
        {currentFormStage == 1 ? (
          <div>
            <button type="button" onClick={nextStage} name="userContactInfo">
              {" "}
              Next
            </button>
          </div>
        ) : null}
        {currentFormStage == 2 ? (
          <div>
            <button type="button" onClick={prevStage}>
              {" "}
              Prev
            </button>
            <button type="button" onClick={nextStage} name="userWorkExp">
              Next{" "}
            </button>
          </div>
        ) : null}
        {currentFormStage == 3 ? (
          <div>
            <button type="button" onClick={prevStage}>
              {" "}
              Prev
            </button>
            <button onClick={nextStage} name="educations">
              next
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                console.log(userData);
              }}>
              userData
            </button>
          </div>
        ) : null}
        {currentFormStage ==4? <div>
          <button type="sumbit">Sumbit</button>
        </div>:null}
      </section>
    </form>
  );
}

export default ResumeForm;
