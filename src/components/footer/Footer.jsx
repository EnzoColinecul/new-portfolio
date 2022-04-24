import React from 'react';
import { FaTwitterSquare, FaInstagram } from 'react-icons/fa';

import './footer.css';

function Footer() {
  return (
    <footer id="footer">
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://twitter.com/Chiineesee">
          <FaTwitterSquare />
          {' '}
        </a>
        <a href="https://instagram">
          <FaInstagram />
          {' '}
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Enzo Colinecul</small>
      </div>
    </footer>
  );
}

export default Footer;
