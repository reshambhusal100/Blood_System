import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../css/Contact.css';
import location from '../images/location-dot-solid.svg';
import email from '../images/envelope-solid.svg';
import phone from '../images/phone-solid.svg';
import Navbar from './Navbar';
// Import Font Awesome CSS in your component or entry file
import 'font-awesome/css/font-awesome.min.css';
import Footer from './Footer';

function Contact() {
  const [state, handleSubmit] = useForm("mnqezoll");

  const submitForm = (e) => {
    e.preventDefault();
    // Handle any additional logic before submitting the form if needed
    handleSubmit(e);
    if(state.succeeded)
{
    e.target.reset();
    alert("message sent successfully");
}  
 
  };

  return (
    <>
      <Navbar />
      <div id='contactus'>
      <div id='cont-img'>
      <div className='contactus'>
        <p className='contact-heading'>CONTACT US</p>
        <div className='contact-1'>
          <div className='message'>
            <div className='message-location'>
              <img src={location} alt='location' width='40px' height='80px' className='message-image1' />
              <p className='message-image' id='contact-loc'>Butwal, Rupendehi, Nepal</p>
            </div>
            <div className='message-email'>
              <img src={email} alt='email' width='40px' height='80px' className='message-image1' />
              <p className='message-image' id='contact-email'>bloodbank@gmail.com</p>
            </div>
            <div className='message-phone'>
              <img src={phone} alt='phone' width='40px' height='80px' className='message-image1' />
              <p className='message-image' id='contact-no'>9867755021</p>
            </div>
          </div>
          <div className='message-1'>
            <form onSubmit={submitForm}>
              <label>Name:</label>
              <input type='text' className='message-2' name='name' placeholder='Enter full name' required />
              <label>Email:</label>
              <input type='email' className='message-2'name='email' placeholder='Enter your email' required />
              <label>Message:</label>
              <textarea rows='5' columns='10' className='message-2' name='message' required></textarea>
              <button type='submit' disabled={state.submitting}>Submit Now</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
