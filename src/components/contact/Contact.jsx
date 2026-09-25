import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import toast from 'react-hot-toast';

import { contact } from '../../data/profile';
import SectionHead from '../section-head/SectionHead';
import './contact.css';

const channels = [
  { label: 'Phone / WhatsApp', value: contact.phoneDisplay, href: contact.whatsapp },
  { label: 'LinkedIn', value: 'in/enzo-colinecul', href: contact.linkedin },
  { label: 'GitHub', value: 'EnzoColinecul', href: contact.github },
];

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
        message: `Message not sent. Please try again or email ${contact.email} directly.`,
      });
      toast.error('Message not sent. Please try again.', { id: toastId });
    } finally {
      setDisableButton(false);
    }
  };

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <SectionHead index="06" id="contact-title" title="Contact" note="Usually based in Melbourne, AU" />

        <p className="contact__statement serif">
          Hiring for security, IAM or AI automation?
          {' '}
          <em>Let&apos;s talk.</em>
        </p>

        <a href={`mailto:${contact.email}`} className="contact__email serif">
          <span>{contact.email}</span>
          <span className="contact__email-arrow" aria-hidden="true">↗</span>
        </a>

        <div className="contact__grid">
          <ul className="contact__channels">
            {channels.map(({ label, value, href }) => (
              <li key={label}>
                <span className="contact__channel-label mono">{label}</span>
                <a href={href} target="_blank" rel="noreferrer" className="contact__channel-value">
                  {value}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
            <li>
              <span className="contact__channel-label mono">Location</span>
              <span className="contact__channel-value">{contact.location}</span>
            </li>
          </ul>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <p className="contact__form-title mono">Or leave a message</p>
            <label htmlFor="contact-name">
              <span className="mono">Full Name</span>
              <input id="contact-name" type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
            </label>
            <label htmlFor="contact-email">
              <span className="mono">Email Address</span>
              <input id="contact-email" type="email" name="email" placeholder="jane@company.com" autoComplete="email" spellCheck={false} required />
            </label>
            <label htmlFor="contact-message">
              <span className="mono">Message</span>
              <textarea id="contact-message" name="message" placeholder="Tell me about the role…" autoComplete="off" rows="4" required />
            </label>
            <button
              type="submit"
              className="btn btn-primary contact__submit"
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
      </div>
    </section>
  );
}

export default Contact;
