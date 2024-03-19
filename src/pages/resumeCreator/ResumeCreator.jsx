import React, { useContext, useState } from "react";
import ResumeForm from "../../components/resumeFrom/ResumeForm";
import template1Img from "../../assets/Images/template1.png";
import template2Img from "../../assets/Images/template2.png";
import styles from "./resumeCreator.module.css";
import { UserContext } from "../../context/User";
import { Link } from "react-router-dom";
import FormLifeCycle from "../../components/FormLifeCycle";
function ResumeCreator() {
  const { user } = useContext(UserContext);
  const [isChoosingTemplate, setIsChoosingTemplate] = useState(true);
  const [selectedTemplate, setSelectedTemplate] = useState("1");
  const [resumeName, setResumeName] = useState("");
  const [currentFormStage, setCurrentFormStage] = useState(1);

  const viewedTemplateSelector = (e) => {
    setSelectedTemplate(e.target.name);
  };

  const changeHandler = (e) => {
    setResumeName(e.target.value);
  };

  const confirmTemplate = () => {
    let confirmTemp;
    confirmTemp = confirm("Are you sure you want this template?");
    if (!confirmTemp) {
      return;
    }
    if (resumeName === "") {
      setResumeName("Resume_Name");
    }
    setIsChoosingTemplate(false);
  };

  return (
    <div className={styles.ResumeCreatorPageContainer}>
      {user ? (
        <div className={styles.ResumeFormContainer}>
          {isChoosingTemplate ? (
            <div className={styles.templateChooserContainer}>
              <section className={styles.templatesOptionsContainer}>
                <div className={styles.templateChooserHeader}>
                  <p>Choose your template</p>
                </div>
                <div className={styles.templateOptions}>
                  <div
                    className={`${styles.singleOptionBox} ${
                      selectedTemplate == "1" ? styles.selectedTemplate : ""
                    }`}>
                    <img
                      src={template1Img}
                      onClick={viewedTemplateSelector}
                      name={"1"}
                      alt="template1"
                      className={styles.templateOption}
                    />
                  </div>
                  <div
                    className={`${styles.singleOptionBox} ${
                      selectedTemplate == "2" ? styles.selectedTemplate : ""
                    }`}>
                    <img
                      src={template2Img}
                      onClick={viewedTemplateSelector}
                      name={"2"}
                      alt="template2"
                      className={styles.templateOption}
                    />
                  </div>
                </div>
              </section>
              <form
                onSubmit={confirmTemplate}
                className={styles.confirmTemplateBtnContainer}>
                <input
                  type="text"
                  onChange={changeHandler}
                  placeholder="Resume Name"
                  required
                />
                <button className={styles.confirmTemplateBtn}>Confirm</button>
              </form>
              <section className={styles.templateViewer}>
                {selectedTemplate == "1" ? (
                  <img
                    src={template1Img}
                    alt="template1"
                    className={styles.templateOptionPreview}
                  />
                ) : selectedTemplate == "2" ? (
                  <img
                    src={template2Img}
                    alt="template2"
                    className={styles.templateOptionPreview}
                  />
                ) : selectedTemplate == "3" ? (
                  "3"
                ) : null}
              </section>
            </div>
          ) : (
            <div className={styles.formBox}>
              <section className={styles.stageSection}>
                <FormLifeCycle
                  stage={currentFormStage}
                  setCurrentFormStage={setCurrentFormStage}
                />
              </section>
              <ResumeForm
                currentFormStage={currentFormStage}
                setCurrentFormStage={setCurrentFormStage}
                resumeName={resumeName}
                selectedTemplate={selectedTemplate}
              />
            </div>
          )}
        </div>
      ) : (
        <div className={styles.myResumesErrorPageContainer}>
          <div className={styles.userNotLoggedInErrorPage}>
            <p>Login to create resumes</p>
            <button className={styles.loggedInErrorBtn}>
              <Link to={"/Authentication"}>Login</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResumeCreator;
