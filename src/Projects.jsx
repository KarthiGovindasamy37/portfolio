import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Projects() {

    let projects=[
        {
            picture:"",
            title:"CRM APP",
            description:"CRM app is fully managed and controlled by authentication system",
            tools:["mongoDB","express","JasonWebToken"]
        }
    ]
  return (
    <div className="projectsbg">
        
    <div className="d-flex flex-wrap pt-5  ">
        {
            projects.map((ele)=>{
                return(
                    <div className='col-md-6 d-flex justify-content-center'>
                    <div className="card mb-5 " style={{maxWidth: "540px"}}>
                      <div className="row g-0">
                        <div className="col-md-4">
                          <img src="/assets/images/aws.png" style={{height:"200px"}} className="img-fluid rounded-start projectimg" alt="..."/>
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
                             <FontAwesomeIcon  className=" projecticon" icon={faGithub} size="2x" />
                             <FontAwesomeIcon className=' ms-4 projecticon' icon={ faArrowUpRightFromSquare} size="2x" />
                              
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