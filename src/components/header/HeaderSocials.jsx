import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/enzo-colinecul/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
        <BsLinkedin aria-hidden="true" />
      </a>
      <a href="https://github.com/EnzoColinecul/" target="_blank" rel="noreferrer" aria-label="GitHub profile">
        <BsGithub aria-hidden="true" />
      </a>
      <a href="mailto:enzocolinecul1997@gmail.com" aria-label="Email Enzo Colinecul">
        <IoMdMail aria-hidden="true" />
      </a>
    </div>
  );
}

export default HeaderSocials;
