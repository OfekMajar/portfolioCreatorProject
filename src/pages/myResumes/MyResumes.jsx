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
      <button onClick={()=>{console.log(resumes);}}>test resumes</button>'
      <div id='myResumesContainer'> 
      {resumes.map(item=>{
  
       return <MyResumeCard selectedTemplate={item.selectedTemplate} resumeName={item.resumeName} />
      })}
      </div>
    </div>
  )
}

export default MyResumes
