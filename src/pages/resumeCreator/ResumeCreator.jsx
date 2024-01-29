import React, { useState } from "react";
import ResumeForm from "../../components/ResumeForm";
import MiniTemplate from "../../components/templates/miniTamplate/MiniTemplate";
import "./resumeCreator.css"
function ResumeCreator() {
  const [isChoosingTemplate,setIsChoosingTemplate]=useState(true)
  const [selectedTemplate,setSelectedTemplate]=useState()
  return (
    <div id="ResumeFormContainer">
    {isChoosingTemplate?
    <div>
      <section id="templatesOptions">
      <MiniTemplate/> 
      </section>
      <section id="templateViewer"></section>
    </div>
    :
    <ResumeForm />
    }
      
    </div>
  );
}

export default ResumeCreator;
