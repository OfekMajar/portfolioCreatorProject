import React from "react";
import "./template1.css";
function Template1() {
  return (
    <div id="temp1Container">
      <section className="userFullName">
        <span id="firstName">user name</span>
        <span id="lastName">last name</span>
      </section>
      <section className="content">
        <div className="contentColumn">
          <div className="leftContentColumn">
            <div className="contactInfo">
              <h4>Contact info</h4>

              <ul>
                <li>Email</li>
                <li>Phone number</li>
              </ul>
            </div>
          </div>
          <div className="rightContentColumn">
            <div className="aboutMe">
              <h4>About me</h4>
              <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis, harum est hic minima quae enim accusantium inventore
                incidunt ipsam cum exercitationem porro velit eum. Cum
                laboriosam saepe facere pariatur tempora.
              </div>
            </div>
            <div className="education">
              <h4>Education</h4>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Template1;
