import React, {useRef} from 'react'
import './Join.css'
import emailjs from '@emailjs/browser';
import { Navigate } from 'react-router-dom';

const Join = () => {
      const form =useRef()
      const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs.sendForm('service_yngyt5i', 'template_hs962rd', form.current, 'M24rBGhICKWMsVZET')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
          };
  return (  
    <div className="Join" id='join-us'>
      <div className="left-j">
            <hr/>
            <div>
                  <span className='stroke-text'>READY TO</span>
                  <span>MAKE YOUR</span>
            </div>
            <div>
                  <span>HEART HEALTHY</span>
                  <span className='stroke-text'>WITH US</span>
            </div>
      </div>
      <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                  <input type="email" name="user_email" placeholder='Enter your Email Address' />
                  <button className="btn btn-j">Join Now</button>
            </form>
      </div>
    </div>
  )
}

export default Join