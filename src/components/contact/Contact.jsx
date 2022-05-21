import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { IoMdMail } from 'react-icons/io';
import { AiOutlineWhatsApp } from 'react-icons/ai';

import './contact.css';
import toast from 'react-hot-toast';

function Contact() {
  const form = useRef();
  const [disableButton, setDisableButton] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setDisableButton(true);
    toast.loading('Sending...');
    emailjs.sendForm('service_agjyyde', 'template_akmmlin', form.current, '9Sx6LMn8jM_bYsqeT')
      .then((result) => {
        console.log(result.text);
        toast.dismiss();
        e.target.reset();
        toast.success('Email sent :)');
        setDisableButton(false);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <section id="contact">
      <h5>Can Be Contacted</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-title">
              <IoMdMail className="contact__option-icon" />
              <h4>Email</h4>
            </div>
            <h5>enzocolinecul1997@gmail.com</h5>
            <a href="mailto:enzocolinecul1997@gmail.com" target="_blank" rel="noreferrer">Send Message</a>
          </article>
          <article className="contact__option">
            <div className="contact__option-title">
              <AiOutlineWhatsApp className="contact__option-icon" />
              <h4>WhatsApp</h4>
            </div>
            <h5>+542945403209</h5>
            <a href="https://api.whatsapp.com/send?phone=+542945403209" target="_blank" rel="noreferrer">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" cols="30" rows="10" required />
          <button type="submit" className={disableButton ? 'btn-disabled' : 'btn btn-primary'}>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
