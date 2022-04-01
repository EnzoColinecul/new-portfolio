import React, { useState } from 'react';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { RiContactsBook2Line, RiServiceLine } from 'react-icons/ri';
import { BiBook } from 'react-icons/bi';

import './nav.css';

function Nav() {
  const [active, setActive] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={() => setActive('#home')} className={active === '#home' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActive('#services')} className={active === '#services' ? 'active' : ''}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}>
        <RiContactsBook2Line />
      </a>
    </nav>
  );
}

export default Nav;
