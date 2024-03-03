import React, { useContext, useEffect } from 'react'
import { ResumesContext } from '../../context/Resumes';
import { UserContext } from '../../context/User';
import styles from "./MyResumes.module.css"
import MyResumeCard from '../../components/myResumeCard/MyResumeCard';
import { Link } from 'react-router-dom';

function MyResumes() {
  const { resumesFromDb, resumes } = useContext(ResumesContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      resumesFromDb()
    }
  }, [user])

  return (
    <div className={styles.myResumesPageContainer}>
      {user ? (
        <div className={styles.myResumesContainer}>
          {resumes.map(item => (
            <MyResumeCard
              key={item.resumeId}
              resumeId={item.resumeId}
              selectedTemplate={item.resumeData.selectedTemplate}
              resumeName={item.resumeData.resumeName}
            />
          ))}
        </div>
      ) : (
        <div className={styles.myResumesErrorPageContainer}>
          <div className={styles.userNotLoggedInErrorPage}>
            <p>Login to see your resumes</p>
            <button className={styles.loggedInErrorBtn}>
              <Link to={"/Authentication"}>Login</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default MyResumes
