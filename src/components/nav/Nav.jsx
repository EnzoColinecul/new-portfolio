import React from 'react';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { RiContactsBook2Line, RiServiceLine } from 'react-icons/ri';
import { BiBook } from 'react-icons/bi';

import './nav.css';

function Nav() {
  return (
    <nav>
      <a href="#home">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <RiContactsBook2Line />
      </a>
    </nav>
  );
}

export default Nav;
