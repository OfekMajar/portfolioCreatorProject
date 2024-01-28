import React, { useState } from "react";
import WorkExperiences from "./WorkExperiences";
function ResumeForm() {

const [formData,setFormData]=useState({})
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
  }
  return (
    <form>
      <section id="contactInfoSection">
        <h2>Contact Info:</h2>
        <div>
          <div className="lableAndInput">
            <label htmlFor="">First name</label>
            <input type="text" name="firstName" />
          </div>
          <div className="lableAndInput">
            <label htmlFor="">Last name</label>
            <input type="text" name="lastName" />
          </div>
        </div>
        <div>
          <div className="lableAndInput">
            <label htmlFor="">Email:</label>
            <input name="email" type="email" />
          </div>
          <div className="lableAndInput">
            <label htmlFor="">Phone number:</label>
            <input name="phoneNumber" type="text" />
          </div>
        </div>
        <div className="lableAndInput">
          <label htmlFor="">About me:</label>
          <textarea name="aboutMe" type="text" id="aboutMeInput" />
        </div>
      </section>
      <div id="workExpContainer">
        <h2>Work experience:</h2>
        {workExpList.map((item) => {
          return item;
        })}
        <button onClick={createMoreWorkExp}> add Another</button>
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
