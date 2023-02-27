import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import axios from 'axios'
import { env } from './config'
import { toast } from 'react-toastify'

function Contact() {

  let formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      message:""
    },
    validate:(values)=>{
      let errors={}
      if(values.name===""){
        errors.name="Please mention your name"
      }
      if(values.email===""){
        errors.email="Please mention your email id"
      }
      if(values.message===""){
        errors.message="Please leave a message"
      }
      if(values.message.length>=1 && values.message.length<5){
        errors.message="Please enter minimum 5 characters"
      }
      return errors;
    },
    onSubmit:async(values)=>{
      try {
        let message=await axios.post(`${env.api}/portfolio`,values)
        if(message.status===200){
          toast.success(message.data.message,{toastId:"1"})
          formik.setValues({
            name:"",
            email:"",
            message:""
          })
          
        }
        
      } catch (error) {
        toast.error(error.response.data.message,{toastId:"2"})
      }
    }
  })
  return (
    <div className="contactbg">
  <div className="container">
  <h2 className="text pt-2">Let's Build Something Together</h2>
  <br/><br/>
  <div className="row">
    <div className="col-lg-6 contactcol">
      <h3 className="text">Karthi Govindasamy</h3>
      <br/>
      <div className="d-flex">
        <FontAwesomeIcon  className="iconcolor mt-2" icon={faLocationDot} size="1x" />
        <h4 className="text ms-1">Tirupur,TamilNadu</h4>
    </div>
      <br/>
      <div className="d-flex">
      <FontAwesomeIcon  className="iconcolor mt-2" icon={faPhone} size="1x" />      
        <h4 className="text ms-1">+91 7502815096</h4>
      </div>
      <br/>
      <div className="d-flex">
      <FontAwesomeIcon  className="iconcolor mt-2" icon={faEnvelope} size="1x" />
      <h4 className="text ms-1">karthi369234@gmail.com</h4>
      </div>
      <br/>
      <div className="d-flex ">
      <div className='ms-5 mb-3'><a href="https://github.com/KarthiGovindasamy37" target="_blank"><FontAwesomeIcon  className=" text-primary contacticon" icon={faGithub} size="2x" /></a></div>
      <div className='ms-5 mb-3'><a href="https://www.linkedin.com/in/karthi-govindasamy-456ba699/" target="_blank"><FontAwesomeIcon  className=" text-primary contacticon" icon={faLinkedin} size="2x" /></a></div>
      </div>
      <div className="d-flex mt-4 mb-5 justify-content-center contactresume">
        <a href="https://drive.google.com/file/d/1-NkdWHY8Tf8-qJXUBM95px5ZuDvlWB6X/view?usp=share_link" target="_blank"><button className=" contactresbtn">Resume</button></a>
      </div>
    </div>
    <div className="col-lg-6">
      <form onSubmit={formik.handleSubmit} className="ms-lg-5 ps-lg-5">
        <div className="mb-3 col-md-6">
        <label for="name" className="text">Name</label>
        <input type="text" id="name" className="form-control col-md-3"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}/>
        <span style={{color:"violet"}}>{formik.errors.name}</span>
      </div>
      <div className="mb-3 col-md-6">
        <label for="email" className="text">Email</label>
        <input type="email" id="email" className="form-control col-md-6"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}/>
        <span style={{color:"violet"}}>{formik.errors.email}</span>
      </div>
        <label for="message" className="text">Message</label>
        <textarea  id="message" cols="30" rows="5 " className="form-control"
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}></textarea>
        <span style={{color:"violet"}}>{formik.errors.message}</span>
      <div className="mt-3 pb-5">
        <button type="submit" disabled={!formik.isValid} className="btn btn-primary "><FontAwesomeIcon icon={faTruckFast} /> Reach Out</button>
      </div>
      </form>
    </div>
  </div>
</div>
<div style={{backgroundColor:"black",height:"60px"}} className="d-flex justify-content-center align-items-center text-white mt-3"><h6><FontAwesomeIcon icon={faCopyright}/>rafted by<span style={{color:"lawngreen"}}> KARTHI</span></h6></div>
</div>
 

  )
}

export default Contact