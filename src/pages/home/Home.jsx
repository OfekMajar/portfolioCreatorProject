import React from "react";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.containerLeftAndRight}>
        <div className={styles.leftSide}>
          <section>
            <p>Free online resume builder</p>
            <Link to={"/ResumeCreator"}>
              {" "}
              <button>Build my resume</button>
            </Link>
          </section>
        </div>
        <div className={styles.rightSide}>
          {" "}
          <img
            src="https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_1280.jpg"
            alt=""
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
