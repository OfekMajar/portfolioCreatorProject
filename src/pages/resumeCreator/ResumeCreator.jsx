import React, { useContext, useState } from "react";
import ResumeForm from "../../components/resumeFrom/ResumeForm";
import Template2 from "../../components/templates/template2/Template2";
import Template1 from "../../components/templates/template1/template1";
import template1Img from "../../assets/Images/template1.png";
import template2Img from "../../assets/Images/template2.png";
import MiniTemplate from "../../components/templates/miniTamplate/MiniTemplate";
import "./resumeCreator.css";
import { UserContext } from "../../context/User";
import { Link } from "react-router-dom";
function ResumeCreator() {
  const { user } = useContext(UserContext);
  const [isChoosingTemplate, setIsChoosingTemplate] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState("1");
  const [resumeName, setResumeName] = useState("");
  const viewedTemplateSelector = (e) => {
    setSelectedTemplate(e.target.name);
  };
  const changeHandler = (e) => {
    setResumeName(e.target.value);
  };
  const confirmTemplate = () => {
    let confirmTemp;
    confirmTemp = confirm("are you sure you want this template?");
    if (!confirmTemp) {
      return;
    }
    if (resumeName === "") {
      setResumeName("Resume_Name");
    }
    setIsChoosingTemplate(false);
  };
  return (
    <div className="ResumeCreatorPageContainer">
      {user ? (
        <div id="ResumeFormContainer">
          {isChoosingTemplate ? (
            <div id="templateChooserContainer">
              <section id="templatesOptionsContainer">
                <div className="templateChooserHeader">
                  <p>Choose your template</p>
                </div>
                <div id="templateOptions">
                  <div
                    className={`singleOptionBox ${
                      selectedTemplate == "1" ? "selectedTemplate" : null
                    }`}>
                    <img
                      src={template1Img}
                      onClick={viewedTemplateSelector}
                      name={"1"}
                      alt="template1"
                      className="templateOption"
                    />
                  </div>
                  <div
                    className={`singleOptionBox ${
                      selectedTemplate == "2" ? "selectedTemplate" : null
                    }`}>
                    <img
                      src={template2Img}
                      onClick={viewedTemplateSelector}
                      name={"2"}
                      alt="template2"
                      className="templateOption"
                    />
                  </div>
                </div>
              </section>
              <form
                onSubmit={confirmTemplate}
                className="confirmTemplateBtnContainer">
                <input
                  type="text"
                  onChange={changeHandler}
                  placeholder="Resume Name"
                  required
                />
                <button id="confirmTemplateBtn">Confirm</button>
              </form>
              <section id="templateViewer">
                {selectedTemplate == "1" ? (
                  <Template1 isPreview={true} />
                ) : selectedTemplate == "2" ? (
                  <Template2 isPreview={true}></Template2>
                ) : selectedTemplate == 3 ? (
                  3
                ) : null}
              </section>
            </div>
          ) : (
            <ResumeForm
              resumeName={resumeName}
              selectedTemplate={selectedTemplate}
            />
          )}
        </div>
      ) : (
        <div className="myResumesErrorPageContainer">
          <div className="userNotLoggedInErrorPage">
            <p>Login to create resumes</p>
            <button id="loggedInErrorBtn" className="authNavBtn">
              <Link to={"/Authentication"}>Login</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeCreator;
