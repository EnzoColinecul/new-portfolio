import { FaTwitterSquare } from 'react-icons/fa';

import './footer.css';

function Footer() {
  return (
    <footer id="footer">
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#timeline">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com/Chiineesee" aria-label="Twitter profile">
          <FaTwitterSquare aria-hidden="true" />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Enzo Colinecul</small>
      </div>
    </footer>
  );
}

export default Footer;
