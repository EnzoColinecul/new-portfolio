import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

import toast from 'react-hot-toast';
import './contact.css';

function Contact() {
  const form = useRef();
  const [disableButton, setDisableButton] = useState(false);
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const sendEmail = async (e) => {
    e.preventDefault();
    const submittedForm = e.currentTarget;
    setDisableButton(true);
    setStatus({ type: 'pending', message: 'Sending…' });
    const toastId = 'contact-form';
    toast.loading('Sending…', { id: toastId });

    try {
      await emailjs.sendForm('service_agjyyde', 'template_akmmlin', submittedForm, '9Sx6LMn8jM_bYsqeT');
      submittedForm.reset();
      setStatus({ type: 'success', message: 'Email sent successfully.' });
      toast.success('Email sent successfully.', { id: toastId });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Message not sent. Please try again or email enzocolinecul1997@gmail.com directly.',
      });
      toast.error('Message not sent. Please try again.', { id: toastId });
    } finally {
      setDisableButton(false);
    }
  };
  return (
    <section id="contact">
      <p className="section-eyebrow">Can Be Contacted</p>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__option-title">
              <IoMdMail className="contact__option-icon" aria-hidden="true" />
              <h3>Email</h3>
            </div>
            <p>enzocolinecul1997@gmail.com</p>
            <a href="mailto:enzocolinecul1997@gmail.com" target="_blank" rel="noreferrer">Send Message</a>
          </article>
          <article className="contact__option">
            <div className="contact__option-title">
              <AiOutlineWhatsApp className="contact__option-icon" aria-hidden="true" />
              <h3>WhatsApp</h3>
            </div>
            <p>+64 027 361 2686</p>
            <a href="https://api.whatsapp.com/send?phone=+640273612686" target="_blank" rel="noreferrer">Send Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <label htmlFor="contact-name">
            Full Name
            <input id="contact-name" type="text" name="name" placeholder="e.g. Enzo Colinecul…" autoComplete="name" required />
          </label>
          <label htmlFor="contact-email">
            Email Address
            <input id="contact-email" type="email" name="email" placeholder="you@example.com…" autoComplete="email" spellCheck={false} required />
          </label>
          <label htmlFor="contact-message">
            Message
            <textarea id="contact-message" name="message" placeholder="Tell me about your project…" autoComplete="off" cols="30" rows="10" required />
          </label>
          <button
            type="submit"
            className={disableButton ? 'btn-disabled' : 'btn btn-primary'}
            disabled={disableButton}
            aria-busy={disableButton}
          >
            {disableButton ? 'Sending…' : 'Send Message'}
          </button>
          {status.message && (
            <p className={`contact__status contact__status--${status.type}`} role="status" aria-live="polite">
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
