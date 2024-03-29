import React, { useEffect, useState, useContext } from "react";
import WorkExperiences from "../WorkExperiences";
import Educations from "../Educations";
import ContactInfo from "../ContactInfo";
import { UserContext } from "../../context/User";
import { addDoc, collection, doc, query } from "firebase/firestore";
import { db } from "../../config/firebase";
import Template1 from "../templates/template1/template1";
import "./resumeForm.css";
import Template2 from "../templates/template2/Template2";
function ResumeForm({
  selectedTemplate,
  resumeName,
  currentFormStage,
  setCurrentFormStage,
}) {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({});
  const [workExpData, setWorkExpData] = useState({});
  const [workExpList, setWorkExpList] = useState([]);
  const [educationData, setEducationData] = useState({});
  const [educationsList, setEducationsList] = useState([]);

  const [resumeData, setResumeData] = useState({});
  console.log(selectedTemplate, user.userId);
  useEffect(() => {
    setResumeData({
      userId: user.userId,
      selectedTemplate: selectedTemplate,
      resumeName: resumeName,
    });
  }, [selectedTemplate]);
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
    setWorkExpData({});
  };

  const createMoreEducation = (e) => {
    setEducationsList([...educationsList, educationData]);
    setEducationRenderList([
      ...educationRenderList,
      <Educations changeHandler={handleChangeEducation} />,
    ]);
    setEducationData({});
  };

  useEffect(() => {
    createMoreWorkExp();
    createMoreEducation();
  }, []);
  //*
  const nextStage = (e) => {
    switch (currentFormStage) {
      case 1:
        resumeData[e.target.name] = { ...formData };
        setResumeData({ ...resumeData });
        setCurrentFormStage(currentFormStage + 1);

        break;
      case 2:
        {
          resumeData[e.target.name] = [...workExpList];
          setResumeData({ ...resumeData });
          setCurrentFormStage(currentFormStage + 1);
        }
        break;
      case 3:
        {
          resumeData[e.target.name] = [...educationsList];
          setResumeData({ ...resumeData });
          setCurrentFormStage(currentFormStage + 1);
        }
        break;
      case 4:
        {
          setResumeData({ ...resumeData });
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
  const sumbitHandler = async (e) => {
    e.preventDefault();
    if (!user) {
      return alert("you must log in ");
    }
    setResumeData({ ...resumeData });
    const collectionRef = collection(db, "Resumes");
    await addDoc(collectionRef, resumeData);
  };
  console.log(resumeData);
  return (
    <form className="resumeCreatorFrom" onSubmit={sumbitHandler}>
      {currentFormStage == 1 ? (
        <ContactInfo
          nextStage={nextStage}
          changeHandler={changeContactInfoHandler}
        />
      ) : currentFormStage == 2 ? (
        <section className={"workExpSection formSection"}>
          <h2>Work experience:</h2>
          {workExpRederList.map((item) => {
            return item;
          })}
          <button
            className="addAnotherBtn "
            name="workExp"
            onClick={createMoreWorkExp}
            type="button">
            {" "}
            add Another
          </button>
        </section>
      ) : currentFormStage == 3 ? (
        <section class="educationContainer formSection">
          <h2>Education</h2>
          {educationRenderList.map((item) => {
            return item;
          })}
          <button
            type="button"
            className="addAnotherBtn"
            name="education"
            onClick={createMoreEducation}>
            add Another
          </button>
        </section>
      ) : null}
      <section class="nextAndPrevBtns">
        {currentFormStage == 1 ? null : null}
        {currentFormStage == 2 ? (
          <div class="nextAndPrevBtnBox">
            <button type="button" onClick={prevStage} className="prevStageBtn">
              {" "}
              Prev
            </button>
            <button
              type="button"
              onClick={nextStage}
              className="nextStageBtn"
              name="userWorkExp">
              Next{" "}
            </button>
          </div>
        ) : null}
        {currentFormStage == 3 ? (
          <div class="nextAndPrevBtnBox">
            <button type="button" onClick={prevStage} className="prevStageBtn">
              {" "}
              Prev
            </button>
            <button
              onClick={nextStage}
              className="nextStageBtn"
              name="educations">
              next
            </button>
          </div>
        ) : null}
        {currentFormStage == 4 ? (
          <div className="finalStageContainer">
            {selectedTemplate == 1 ? (
              <Template1
                isPreview={false}
                workExp={workExpList}
                educations={educationsList}
                contactInfo={formData}
              />
            ) : (
              <Template2
                isPreview={false}
                workExp={workExpList}
                educations={educationsList}
                contactInfo={formData}
              />
            )}

            <button className="resumeFormSubmitBtn" type="sumbit">
              Sumbit
            </button>
          </div>
        ) : null}
      </section>
    </form>
  );
}

export default ResumeForm;
