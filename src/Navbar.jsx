import React from 'react'
import { Link, NavLink } from 'react-router-dom'

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
            <NavLink to="/" className={({isActive})=> isActive ? `nav-link me-5 text-dark` : `nav-link me-5 text-white`} >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="skills" className={({isActive})=> isActive ? `nav-link me-5 text-dark` : `nav-link me-5 text-white`} >Skills</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="projects" className={({isActive})=> isActive ? `nav-link me-5 text-dark` : `nav-link me-5 text-white`}>Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about" className={({isActive})=> isActive ? `nav-link me-5 text-dark` : `nav-link me-5 text-white`} >About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="contact" className={({isActive})=> isActive ? `nav-link me-5 text-dark` : `nav-link me-5 text-white`} >Contact</NavLink>
          </li>
          </ul>
          </div>
    </div>
   
  </nav>
  )
}

export default Navbar