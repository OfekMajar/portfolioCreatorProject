import React, { useContext, useEffect } from 'react'
import { ResumesContext } from '../../context/Resumes';
import { UserContext } from '../../context/User';
import "./MyResumes.css"
import MyResumeCard from '../../components/myResumeCard/MyResumeCard';
import { Link } from 'react-router-dom';
function MyResumes() {
  const {  resumesFromDb,resumes } = useContext(ResumesContext);
  const {  user } = useContext(UserContext);
  useEffect(()=>{
    if(user){
      resumesFromDb()
    }
  },[user])
  return (
    <div className='myResumesPageContainer'> 
      
      {user?<div id='myResumesContainer'> 
      {resumes.map(item=>{
       return <MyResumeCard resumeId={item.resumeId} selectedTemplate={item.resumeData.selectedTemplate} resumeName={item.resumeData.resumeName} />
      })}
      </div>:(
        <div className='myResumesErrorPageContainer'> 
        <div className='userNotLoggedInErrorPage'>
          <p>Login to see your resumes</p>
          <button id='loggedInErrorBtn' className="authNavBtn">
            <Link to={"/Authentication"}>Login</Link>
          </button>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default MyResumes
