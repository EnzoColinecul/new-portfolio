import React from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import CTA from './CTA';

import ME from '../../assets/images/me2.jpeg';
import HeaderSocials from './HeaderSocials';

import './header.css';

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Enzo Colinecul</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div>
          <a href="./" className="btn btn-primary btn-rounded scroll__down">
            <BsCaretDownFill />
          </a>
        </div>
        <div className="me">
          <img src={ME} alt="img-me" />
        </div>
      </div>
    </header>
  );
}

export default Header;
