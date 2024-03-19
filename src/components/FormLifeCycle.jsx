import React from "react";
import styles from "../pages/resumeCreator/resumeCreator.module.css";

function FormLifeCycle({ stage, setCurrentFormStage }) {
  return (
    <div className={styles.stageSectionContent}>
      <div
        onClick={() => {
          if (stage > 1) setCurrentFormStage(1);
        }}
        className={`${styles.lifeCycle} ${
          stage === 1 ? styles.currStage : ""
        } ${stage > 1 ? styles.historyStage : ""}`}>
        <p>
          <span className={styles.stageNumber}>1</span> Contact info
        </p>
      </div>
      <div
        onClick={() => {
          if (stage > 2) setCurrentFormStage(2);
        }}
        className={`${styles.lifeCycle} ${
          stage === 2 ? styles.currStage : ""
        } ${stage > 2 ? styles.historyStage : ""}`}>
        <p>
          <span className={styles.stageNumber}>2</span> Work experience
        </p>
      </div>
      <div
        onClick={() => {
          if (stage > 3) setCurrentFormStage(3);
        }}
        className={`${styles.lifeCycle} ${
          stage === 3 ? styles.currStage : ""
        } ${stage > 3 ? styles.historyStage : ""}`}>
        <p>
          <span className={styles.stageNumber}>3</span> Education
        </p>
      </div>
      <div
        className={`${styles.lifeCycle} ${
          stage === 4 ? styles.currStage : ""
        } ${stage > 4 ? styles.historyStage : ""}`}>
        <p>
          <span className={styles.stageNumber}>4</span> Create resume
        </p>
      </div>
    </div>
  );
}

export default FormLifeCycle;
