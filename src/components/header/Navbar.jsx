import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav id='navbarContainer'>
      <li><Link to={"/"}>Home</Link></li>
      <li><Link to={"/MyResumes"}>My Resumes</Link></li>
    </nav>
  )
}

export default Navbar
