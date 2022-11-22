import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Projects() {

    let projects=[
        {
            image:"cmsapp.png",
            title:"CRM APP",
            description:"CRM app has authentication system of Login,Registration and Forgot password.The system has Admin and Employee level access control middlewares.If any leads or service requests are created in the system,it will trigger an email to the manager and admin.",
            tools:["Context","Express","JWT","Bcryptjs","MongoDB"],
            github:"https://github.com/KarthiGovindasamy37/crm-app",
            netlify:"https://melodious-lily-b14447.netlify.app/"
        }
    ]
  return (
    <div className="projectsbg">
        
    <div className="d-flex flex-wrap pt-5  ">
        {
            projects.map(ele=>{
                return(
                    <div className='col-md-6 d-flex justify-content-center'>
                    <div className="card mb-5 " style={{maxWidth: "540px"}}>
                      <div className="row g-0">
                        <div className="col-md-4 project-img-div">
                          <img src={`/assets/images/${ele.image}`} style={{height:"100%",width:"100%"}} className="img-fluid rounded-start projectimg p-1" alt="..."/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{ele.title}</h5>
                            <p className="card-text">{ele.description}</p>
                            <div className="d-flex flex-wrap">
                                <div className='col-4'><h6>tools used :</h6></div>
                                <div className='col-8 d-flex flex-wrap '>
                                {
                                ele.tools.map((ele)=>{
                                    return(
                                        <h6 className='ms-1 text-danger'>{ele}</h6>
                                    )
                                })
                              }</div>
                
                
                            </div>
                            
                            <div className="d-flex mt-2 ">
                             <a href={`${ele.github}`} target="_blank"><FontAwesomeIcon  className=" projecticon ms-4" icon={faGithub} size="2x" /></a>
                             <a href={`${ele.netlify}`}target="_blank"><FontAwesomeIcon className=' ms-5 projecticon' icon={ faArrowUpRightFromSquare} size="2x" /></a>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      
        
                    </div>
                </div>
                
                
              )
            })
}
        
     </div>
    </div>
    
  )
}

export default Projects