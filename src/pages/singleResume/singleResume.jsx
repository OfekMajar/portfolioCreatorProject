import React, { useContext, useEffect, useState } from "react";
import Template1Img from "../../assets/Images/template1.png";
import Template1 from "../../components/templates/template1/template1";
import Template2 from "../../components/templates/template2/Template2";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./singleResume.css";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
function singleResume() {
  const [singleResume, setSingleResume] = useState();
  const [loader, setLoader] = useState(false);
  const resumeId = useParams().ResumeId;

  const downloadPDF = () => {
    const capture = document.querySelector(`.actual-receipt`);

    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL(`img/png`);
      const doc = new jsPDF(`p`, `mm`, `a4`);
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, `PNG`, 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save(`receipt.pdf`);
    });
  };

  const getSingleResumeFromDb = async (resumeId) => {
    try {
      const resumeDoc = doc(db, "Resumes", resumeId);
      const docSnapshot = await getDoc(resumeDoc);
      if (docSnapshot.exists()) {
        const docData = docSnapshot.data();
        console.log(docData);
        setSingleResume(docData);
      } else {
        console.log("Document does not exist");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  };
  useEffect(() => {
    getSingleResumeFromDb(resumeId);
  }, []);

  return (
    <div id="singleResumePageContainer">
      {singleResume ? (
        <div id="singleResumeContainer">
          {" "}
          {singleResume.selectedTemplate == 1 ? (
            <Template1
              isPreview={false}
              workExp={singleResume.userWorkExp}
              educations={singleResume.educations}
              contactInfo={singleResume.userContactInfo}
            />
          ) : singleResume.selectedTemplate == 2 ? (
            <Template2
              isPreview={false}
              workExp={singleResume.userWorkExp}
              educations={singleResume.educations}
              contactInfo={singleResume.userContactInfo}
            />
          ) : null}
          <button className="downloadBtn" onClick={downloadPDF} disabled={!(loader === false)}>
            
            {loader ? <span>Downloading</span> : <span>Donwload</span>}
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default singleResume;
