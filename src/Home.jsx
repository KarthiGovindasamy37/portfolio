import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


function Home(){
    return(
        <div className=" home heroimg">
        <div className="hey">
               <h1 className="text-muted">Hi !</h1> 
               <h1 className="name">I'm Karthi</h1>
               <h1 className="text-muted">i'm a <strong>Full Stack Web Developer</strong></h1>
             <div className="d-flex mt-5">
              <div><a href="https://www.linkedin.com/in/karthi-govindasamy-456ba699/" target="_blank" className="icon"><FontAwesomeIcon style={{color:"rgb(80, 80, 248)"}} className="" icon={faLinkedin} size="3x" /></a></div>
              <div className=" ms-5 ps-3"><a href="https://github.com/KarthiGovindasamy37" target="_blank" ><FontAwesomeIcon style={{color:"rgb(80, 80, 248)"}} className="icon" icon={faSquareGithub} size="3x" /></a></div>
              <div className=" ms-5 ps-3"><Link to="/contact"><FontAwesomeIcon style={{color:"rgb(80, 80, 248)"}} className="icon" icon={faEnvelope} size="3x" /></Link></div>
              </div>
              <div className="d-flex mt-5 justify-content-center resume">
               <a href="/assets/images/resume/resume.pdf" download="/resume.pdf"><button className=" resbtn">Resume</button></a>
              </div>
              </div>
              </div>
      
    )
}

export default Home;