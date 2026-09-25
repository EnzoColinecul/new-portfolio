import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import { contact } from '../../data/profile';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          &copy;
          {' '}
          {new Date().getFullYear()}
          {' '}
          Enzo Ariel Colinecul · Melbourne, Australia
        </p>
        <ul className="footer__socials">
          <li>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <BsLinkedin aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={contact.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <BsGithub aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={`mailto:${contact.email}`} aria-label="Email Enzo Colinecul">
              <HiOutlineMail aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
