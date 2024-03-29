import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function Projects() {

    let projects=[
      {
        image:"chatapp.png",
        title:"REAL-TIME CHAT APP",
        description:"LustigeZeit is a real time chatting application, it uses WebSocket to send message,status of the message and online users to the client instantly. It uses Mongoose for creating schema and Redux tool kit for managing the entire state of the app.",
        tools:["React","ReduxToolKit","Express","Socket.io","Mongoose","MongoDB"],
        frontend:"https://github.com/KarthiGovindasamy37/realtimechat",
        backend:"https://github.com/KarthiGovindasamy37/realtimechat.js",
        socket : "https://github.com/KarthiGovindasamy37/realtimechatsocket.js",
        preview:"https://imaginative-semifreddo-086b75.netlify.app",
        alter:"CHAT APP"
    },
      {
            image:"diva.png",
            title:"ECOMMERCE APP",
            description:"Diva is an ecommerce app,it has search and filter options.App is integrated with razorpay payment gateway.It has JWT authentication system and uses bcryptjs. State of the application is fully managed by redux tool kit.",
            tools:["React","ReduxToolKit","Razorpay","Express","JWT","Nodemailer","MongoDB"],
            frontend:"https://github.com/KarthiGovindasamy37/ecommerce",
            backend:"https://github.com/KarthiGovindasamy37/Ecommerce.js",
            preview:"https://taupe-syrniki-a56bd2.netlify.app",
            alter:"ECOMMERCE APP"
        },
        {
            image:"crm.png",
            title:"CRM APP",
            description:"Epic CRM is an intranet web app that allows only Admin or Manager to create users.It has JWT authentication system and also Admin and Employee level access control middlewares.App features all CRUD operations.If any lead created it will trigger email to the admin and manager.",
            tools:["React","Context","Express","JWT","Bcryptjs","MongoDB"],
            frontend:"https://github.com/KarthiGovindasamy37/crm-app",
            backend:"https://github.com/KarthiGovindasamy37/nodejs-crm-app",
            preview:"https://super-dodol-58d830.netlify.app",
            alter:"CRM APP"
        },
        {
          image:"cmsapp.png",
          title:"CMS SOFTWARE",
          description:"MySite.com is a multi page web application with Razorpay payment integration.It has the system of Login,Registration and Forgot password.Based on the login state in the local storage it routes to the relevant page.",
          tools:["React","Redux","Razorpay","Express","JWT","Bcryptjs","MongoDB"],
          frontend:"https://github.com/KarthiGovindasamy37/cms-software",
          backend:"https://github.com/KarthiGovindasamy37/nodejs-cms-software",
          preview:"https://delightful-chaja-15b83a.netlify.app",
          alter:"CMS SOFTWARE"
      },
      {
          image:"stutea.png",
          title:"Student-Teacher Management App",
          description:"The system is created to manage the informations about student and teacher.It can also assign a student to a particular mentor.This application has all the CRUD operations.",
          tools:["React","Express","MongoDB"],
          frontend:"https://github.com/KarthiGovindasamy37/student-teacher",
          backend:"https://github.com/KarthiGovindasamy37/assign-mentor",
          preview:"https://bespoke-pegasus-3fdaed.netlify.app",
          alter:"Student-Teacher Management App"
      }
    ]
  return (
    <div className="projectsbg">
        
    <div className="d-flex flex-wrap pt-5  ">
        {
            projects.map((ele,idx)=>{
                return(
                    <div className='col-lg-6 d-flex justify-content-center'>
                    <div className="card mb-5 col-10 " >
                      <div className="row g-0">
                        <div className="col-md-4 project-img-div">
                          <img src={`/assets/images/${ele.image}`} style={{height:"100%",width:"100%"}} className="img-fluid rounded-start projectimg p-1" alt={`${ele.alter}`}/>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">{ele.title}</h5>
                            <p className="card-text">{ele.description}</p>
                            <div className="d-flex">
                                <div className='col-4'><h6>Tools used :</h6></div>
                                <div className='col-8 d-flex flex-wrap '>
                                {
                                ele.tools.map((ele)=>{
                                    return(
                                        <h6 className='ms-1 text-danger'>{ele}</h6>
                                    )
                                })
                              }</div>
                
                
                            </div>
                            
                            <div className={`d-flex ${idx === 1 || idx === 3 ? `mt-4 pt-2`: `mt-2`}`}>
                             <div><a href={`${ele.frontend}`} target="_blank"><FontAwesomeIcon  className=" projecticon ms-4" icon={faGithub} size="2x" /></a>
                             <h6 className='text-center ms-1'>Frontend</h6>
                             </div>
                             <div className='ms-3'><a href={`${ele.backend}`} target="_blank"><FontAwesomeIcon  className=" projecticon ms-4" icon={faGithub} size="2x" /></a>
                             <h6 className='text-center ms-2'>Backend</h6>
                             </div>
                             {
                              idx === 0 ?
                              <div className='ms-3'><a href={`${ele.socket}`} target="_blank"><FontAwesomeIcon  className=" projecticon ms-4" icon={faGithub} size="2x" /></a>
                             <h6 className='text-center ms-2 ps-2'>Socket</h6>
                             </div>
                             : null
                             }
                             <div>
                             <a href={`${ele.preview}`}target="_blank"><FontAwesomeIcon className=' ms-4 ps-3 projecticon' icon={ faArrowUpRightFromSquare} size="2x" /></a>
                             <h6 className='text-center ms-4'>Preview</h6>
                             </div>
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