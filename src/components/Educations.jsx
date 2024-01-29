import React from 'react'

function Educations({changeHandler}) {
  return (
    <div  className="SingleEducationContainer">
      <div className="lableAndInput">
        <label htmlFor={`institution`}>Institution/University:</label>
        <input
          type="text"
          name={`institution`}
          onChange={changeHandler}
        />
      </div>
      <div className="lableAndInput">
        <label htmlFor={`degree`}>Degree:</label>
        <input
          type="text"
          name={`degree`}
          onChange={changeHandler}
        />
      </div>
      <div className="lableAndInput">
        <label htmlFor={`major`}>Field of Study/Major:</label>
        <input
          type="text"
          name={`major`}
          onChange={changeHandler}
        />
      </div>
      <div className="lableAndInput">
        <label htmlFor={`graduationYear`}>Graduation Year:</label>
        <input
          type="text" // or use a dropdown for year selection
          name={`graduationYear`}
          onChange={changeHandler}
        />
      </div>
    </div>
  )
}

export default Educations
