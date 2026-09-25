import { contact } from '../../data/profile';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__mark serif" aria-hidden="true">Colinecul</p>
        <div className="footer__bar mono">
          <span>
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            Enzo Ariel Colinecul
          </span>
          <ul className="footer__links">
            <li><a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href={contact.github} target="_blank" rel="noreferrer">GitHub</a></li>
            <li><a href={`mailto:${contact.email}`}>Email</a></li>
            <li><a href="#home">Back to top ↑</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
