import React from 'react'

function ContactInfo({changeHandler}) {
  return (
    <section id="contactInfoSection">
          <h2>Contact Info:</h2>
          <div>
            <div className="lableAndInput">
              <label htmlFor="">First name</label>
              <input
                onChange={changeHandler}
                type="text"
                name="firstName"
              />
            </div>
            <div className="lableAndInput">
              <label htmlFor="">Last name</label>
              <input
                onChange={changeHandler}
                type="text"
                name="lastName"
              />
            </div>
          </div>
          <div>
            <div className="lableAndInput">
              <label htmlFor="">Email:</label>
              <input
                onChange={changeHandler}
                name="email"
                type="email"
              />
            </div>
            <div className="lableAndInput">
              <label htmlFor="">Phone number:</label>
              <input
                onChange={changeHandler}
                name="phoneNumber"
                type="text"
              />
            </div>
          </div>
          <div className="lableAndInput">
            <label htmlFor="">About me:</label>
            <textarea
              onChange={changeHandler}
              name="aboutMe"
              type="text"
              id="aboutMeInput"
            />
          </div>
        </section>
  )
}

export default ContactInfo
