import React, { useState } from "react";
import Template1 from "../template1/Template1";
import Template2 from "../template2/Template2";
import "./miniTemplate.css";
function MiniTemplate() {
  const [chosenTemplate, setChosenTemplate] = useState();
  return (
    <div>
      <Template1 />
    </div>
  );
}

export default MiniTemplate;
