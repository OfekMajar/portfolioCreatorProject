import React, { useState } from "react";
import ResumeForm from "../../components/ResumeForm";
import Template1 from "../../components/templates/template1/template1";
import template1Img from "../../assets/Images/template1.png";
import MiniTemplate from "../../components/templates/miniTamplate/MiniTemplate";
import "./resumeCreator.css";
function ResumeCreator() {
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
    // confirmTemp =confirm("are you sure you want this template?")
    if (!confirmTemp) {
      return;
    }
    if (resumeName === "") {
      setResumeName("Resume_Name");
    }
    setIsChoosingTemplate(false);
  };
  return (
    <div id="ResumeFormContainer">
      {isChoosingTemplate ? (
        <div id="templateChooserContainer">
          <section id="templatesOptionsContainer">
            <div>
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
                  src={template1Img}
                  onClick={viewedTemplateSelector}
                  name={"2"}
                  alt="template2"
                  className="templateOption"
                />
              </div>
              <div
                className={`singleOptionBox ${
                  selectedTemplate == "3" ? "selectedTemplate" : null
                }`}>
                <img
                  src={template1Img}
                  onClick={viewedTemplateSelector}
                  name={"3"}
                  alt="template3"
                  className="templateOption"
                />
              </div>
              <div
                className={`singleOptionBox ${
                  selectedTemplate == "4" ? "selectedTemplate" : null
                }`}>
                <img
                  src={template1Img}
                  onClick={viewedTemplateSelector}
                  name={"4"}
                  alt="template4"
                  className="templateOption"
                />
              </div>
            </div>
          </section>
          <div className="confirmTemplateBtnContainer">
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Resume Name"
            />
            <button onClick={confirmTemplate} id="confirmTemplateBtn">
              Confirm
            </button>
          </div>
          <section id="templateViewer">
            {selectedTemplate == 1 ? (
              <Template1 isPreview={true} />
            ) : selectedTemplate == 2 ? (
              2
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
  );
}

export default ResumeCreator;
