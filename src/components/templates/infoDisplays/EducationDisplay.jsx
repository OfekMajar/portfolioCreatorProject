import React from 'react'

function EducationDisplay(props) {
  // {institution:"institution Name",degree:"degree",major:"major" ,graduationYear:"graduation Year"}
  const {institution,degree,major,graduationYear} =props.education
  console.log(degree);
  return (
    <div className='displaySingleEducation'>
      <p>{institution}</p>
      <p>{degree}</p>
      <p>{major}</p>
      <p>{graduationYear}</p>
    </div>
  )
}

export default EducationDisplay
