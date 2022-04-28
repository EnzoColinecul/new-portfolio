import React from 'react';

import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/enzo-colinecul/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/EnzoColinecul/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="mailto:enzocolinecul1997@gmail.com" target="_blank" rel="noreferrer">
        <IoMdMail />
      </a>
    </div>
  );
}

export default HeaderSocials;
