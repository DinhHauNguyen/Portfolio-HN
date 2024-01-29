import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineAddLocationAlt } from 'react-icons/md'
import emailjs from 'emailjs-com'
import swal from 'sweetalert';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ipf02bo', 'template_kxnoypm', form.current, 'dZJEpw0IMxzbEfPb2')
      .then((result) => {
        swal("Send success!", {
          className: "blue-bg",
        });
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>dinhhaudrm@gmail.com</h5>
            <a href="mailto:dinhhaudrm@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon' />
            <h4>My Phone</h4>
            <h5>0985822877</h5>
            <a href="tel:0985822877" target='_blank'>Call me</a>
          </article>
          <article className="contact__option">
            <MdOutlineAddLocationAlt className='contact__option-icon' />
            <h4>Location</h4>
            <h5>Ho Chi Minh, Viet Nam</h5>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}


export default Contact