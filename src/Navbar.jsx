import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    let name="< Karthi Govindasamy />"
  return (
    <nav className="navbar navbar-expand-lg nav sticky-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand  font navname" style={{fontSize:"1.7rem"}}>{name}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <Link to="/" className="nav-link  text-white me-5" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" className="nav-link text-white me-5" href="#skills">Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" className="nav-link text-white me-5">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link text-white me-5" >About</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" className="nav-link text-white me-5" >Contact</Link>
          </li>
          </ul>
          </div>
    </div>
   
  </nav>
  )
}

export default Navbar