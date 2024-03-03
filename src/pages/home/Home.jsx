import React, { useContext } from "react";
import styles from "./home.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/User";
function Home() {
  const {user} =useContext(UserContext);
  const navigate=useNavigate()
  const goToResumeCreator=()=>{
    if(user){
      navigate("/ResumeCreator")
    }
   else{
    navigate("/Authentication")

   }
  }
  return (
    <div className={styles.homeContainer}>
      
      <div className={styles.containerLeftAndRight}>
        <div className={styles.leftSide}>
          <section>
            <p>Free online resume builder</p>
            
              <button className={styles.startBtn} onClick={goToResumeCreator}>Build my resume</button>
           
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
