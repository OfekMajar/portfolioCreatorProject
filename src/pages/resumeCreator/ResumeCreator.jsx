import React, { useState } from "react";
import ResumeForm from "../../components/ResumeForm";
import MiniTemplate from "../../components/templates/miniTamplate/MiniTemplate";
import "./resumeCreator.css"
function ResumeCreator() {
  const [isChoosingTemplate,setIsChoosingTemplate]=useState(true)
  const [selectedTemplate,setSelectedTemplate]=useState(0)
  return (
    <div id="ResumeFormContainer">
    {isChoosingTemplate?
    <div id="templateChooserContainer">
      <section id="templatesOptionsContainer">
        <div>
          <p>Choose your template</p>
        </div>
      <MiniTemplate/> 
      </section>
      <section id="templateViewer">
        {selectedTemplate==<p>1561515</p>?null:selectedTemplate==2?2:selectedTemplate==3?3:0}
      </section>
    </div>
    :
    <ResumeForm />
    }
      
    </div>
  );
}

export default ResumeCreator;
