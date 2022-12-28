import React from 'react'

function Skills() {

    let skills=[
        {
            title:"Html",
            logo:"/assets/images/html3.png"
        },
        {
            title:"CSS",
            logo:"/assets/images/css1.png"
        },
        {
            title:"Bootstrap",
            logo:"/assets/images/bootstrap.jpeg"
        },
        {
            title:"JavaScript",
            logo:"/assets/images/js.png"
        },
        {
            title:"React",
            logo:"/assets/images/react.png"
        },
        {
            title:"Redux",
            logo:"/assets/images/redux.png"
        },
        {
            title:"MySQL",
            logo:"/assets/images/sql1.png"
        },
        {
            title:"Mongo DB",
            logo:"/assets/images/mongo.png"
        },
        {
            title:"Node JS",
            logo:"/assets/images/node.png"
        },
        {
            title:"AWS",
            logo:"/assets/images/aws.png"
        },
        {
            title:"Postman",
            logo:"/assets/images/postman.png"
        }
    ]

    let certifications=[
        {
            title:"German A1",
            picture:"GermanA1.jpg",
            alter:"German A1 Certificate"
        },
        {
            title:"German A2",
            picture:"GermanA2.jpg",
            alter:"German A2 Certificate"
        }
    ]
  return (
    <div className="container-fluid skillsbg ">
       
    <div className="skills d-flex flex-wrap container pt-4 g-sm-3">
     {
        skills.map((ele)=>{
            return(
                <div className="p-2 bg-white col-10 col-md-3 skillstable anim">
                <div className="d-flex  ">
                  <img className="skillimg" src={ele.logo} alt={ele.title} loading="lazy"/>
                  <h4 className="align-self-center skillsh4">{ele.title}</h4>
                </div>
              </div>
            )
        })
     }
    </div>
    <div className="text-center mt-5 pt-2">
      <h1 className="text-white">Certifications</h1>
    </div>
    <div className="d-flex justify-content-center mt-4">
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
       {
        certifications.map((ele,indx)=>{
            return(
                <div className={`carousel-item ${indx===0 ? `active` : `` }`}>
                <img src={`/assets/images/${ele.picture}`} className="d-block w-100 imgsize" alt={`${ele.alter}`}/>
                <div className="carousel-caption d-none d-md-block">
              <h5 className='text-black'>{ele.title}</h5>
            </div>
              </div>
            )
        })
       }

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
        </div>

        </div>
    </div>
  )
}

export default Skills