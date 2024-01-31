import React, { useContext, useEffect } from 'react'
import { ResumesContext } from '../../context/Resumes';
import { UserContext } from '../../context/User';
import "./MyResumes.css"
import MyResumeCard from '../../components/myResumeCard/MyResumeCard';
function MyResumes() {
  const {  resumesFromDb,resumes } = useContext(ResumesContext);
  const {  user } = useContext(UserContext);
  useEffect(()=>{
    if(user){
      resumesFromDb()
    }
  },[user])
  return (
    <div>
      <div id='myResumesContainer'> 
      {resumes.map(item=>{
       return <MyResumeCard resumeId={item.resumeId} selectedTemplate={item.resumeData.selectedTemplate} resumeName={item.resumeData.resumeName} />
      })}
      </div>
    </div>
  )
}

export default MyResumes
