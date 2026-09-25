import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import toast from 'react-hot-toast';

import { contact } from '../../data/profile';
import './contact.css';

const channels = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: HiOutlineMail,
  },
  {
    label: 'Phone / WhatsApp',
    value: contact.phoneDisplay,
    href: contact.whatsapp,
    external: true,
    Icon: AiOutlineWhatsApp,
  },
  {
    label: 'LinkedIn',
    value: 'in/enzo-colinecul',
    href: contact.linkedin,
    external: true,
    Icon: BsLinkedin,
  },
  {
    label: 'GitHub',
    value: 'EnzoColinecul',
    href: contact.github,
    external: true,
    Icon: BsGithub,
  },
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
        <div className="contact card">
          <div className="contact__intro">
            <p className="section__eyebrow">Contact</p>
            <h2 id="contact-title" className="section__title">Let&apos;s talk about your team</h2>
            <p className="section__lede">
              I&apos;m open to cybersecurity, IAM and AI automation roles in Melbourne or anywhere
              in Australia.
            </p>

            <ul className="contact__channels">
              {channels.map(({
                label, value, href, external, Icon,
              }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="contact__channel"
                    target={external ? '_blank' : undefined}
                    rel="noreferrer"
                  >
                    <span className="contact__channel-icon"><Icon aria-hidden="true" /></span>
                    <span>
                      <span className="contact__channel-label">{label}</span>
                      <span className="contact__channel-value">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <label htmlFor="contact-name">
              Full Name
              <input id="contact-name" type="text" name="name" placeholder="Jane Smith" autoComplete="name" required />
            </label>
            <label htmlFor="contact-email">
              Email Address
              <input id="contact-email" type="email" name="email" placeholder="jane@company.com" autoComplete="email" spellCheck={false} required />
            </label>
            <label htmlFor="contact-message">
              Message
              <textarea id="contact-message" name="message" placeholder="Tell me about the role or project…" autoComplete="off" rows="6" required />
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
