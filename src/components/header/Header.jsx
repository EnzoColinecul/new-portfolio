import React from 'react';
import Typical from 'react-typical';
import CTA from './CTA';

import ME from '../../assets/images/me-header.jpg';
import HeaderSocials from './HeaderSocials';

import './header.css';

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Enzo Colinecul</h1>
        <Typical
          steps={['Full Stack Developer', 2000, 'IAM Security Analyst', 2000]}
          loop={Infinity}
          wrapper="h5"
        />
        {/* <h5 className="text-light">Full Stack Developer</h5> */}
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="img-me" />
        </div>
      </div>
    </header>
  );
}

export default Header;
