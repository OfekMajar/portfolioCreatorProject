import React, { useState } from "react";
import WorkExperiences from "./WorkExperiences";
function ResumeForm() {
const [currentFormStage,setCurrentFormStage]=useState(1)
const [formData,setFormData]=useState({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  aboutMe: "",
})
  const [workExpList, setWorkExpList] = useState([
    <div className="singleWorkExpContainer">
      <div className="lableAndInput">
        <label htmlFor="">Company Name:</label>
        <input type="text" />
      </div>
      <div className="lableAndInput">
        <label htmlFor="">Role:</label>
        <input type="text" />
      </div>
      <div className="lableAndInput">
        <label htmlFor="">Time frame:</label>
        <input type="text" />
      </div>
    </div>,
  ]);
  const [amoutOfWorkExp, setAmoutOfWorkExp] = useState(2);
  const createMoreWorkExp = (e) => {
    e.preventDefault();
    setAmoutOfWorkExp(amoutOfWorkExp + 1);
    console.log(amoutOfWorkExp);
    setWorkExpList([
      ...workExpList,
      <div className="singleWorkExpContainer">
        <div className="lableAndInput">
          <label htmlFor="">Company Name:</label>
          <input type="text" required name={`companyName${amoutOfWorkExp}`} />
        </div>
        <div className="lableAndInput">
          <label htmlFor="">Role:</label>
          <input type="text" required name={`Role${amoutOfWorkExp}`} />
        </div>
        <div className="lableAndInput">
          <label htmlFor="">Time frame:</label>
          <input type="text" required name={`timeFrame${amoutOfWorkExp}`} />
        </div>
      </div>,
    ]);
  };
  const changeHandler=(e)=>{
    formData[e.target.name]=e.target.value
    setFormData({...formData})
    console.log(formData);
  }
  const isStageComplete=(stage)=>{
    console.log(stage);
    switch (stage) {
      case 1:
        return (
          formData.firstName !== "" &&
          formData.lastName !== "" &&
          formData.email !== "" &&
          formData.phoneNumber !== "" &&
          formData.aboutMe !== ""
        );
        break;
    
      default:
        break;
    }
  }
const nextStage=(e)=>{
  e.preventDefault()
  if(isStageComplete(currentFormStage)){
    setCurrentFormStage(currentFormStage+1)
    console.log("Stage is done ");

  }else{
    console.log("Stage not done yet");
  }
  
}
  return (
    <form>
      <section id="contactInfoSection">
        <h2>Contact Info:</h2>
        <div>
          <div className="lableAndInput">
            <label htmlFor="">First name</label>
            <input onChange={changeHandler} type="text" name="firstName" />
          </div>
          <div className="lableAndInput">
            <label htmlFor="">Last name</label>
            <input onChange={changeHandler} type="text" name="lastName" />
          </div>
        </div>
        <div>
          <div className="lableAndInput">
            <label htmlFor="">Email:</label>
            <input onChange={changeHandler} name="email" type="email" />
          </div>
          <div className="lableAndInput">
            <label htmlFor="">Phone number:</label>
            <input onChange={changeHandler} name="phoneNumber" type="text" />
          </div>
        </div>
        <div className="lableAndInput">
          <label htmlFor="">About me:</label>
          <textarea onChange={changeHandler} name="aboutMe" type="text" id="aboutMeInput" />
        </div>
        <button onClick={nextStage}  >Next</button>
      </section>
      <div id="workExpContainer">
        <h2>Work experience:</h2>
        {workExpList.map((item) => {
          return item;
        })}
       {currentFormStage==2? <button onClick={createMoreWorkExp}> add Another</button>:null}
      </div>
      <div>
        <h2>Education</h2>
        <div className="lableAndInput">
          <label htmlFor=""></label>
          <input type="text" />
        </div>
      </div>
    </form>
  );
}

export default ResumeForm;
