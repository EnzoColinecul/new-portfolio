import Typical from 'react-typical';
import CTA from './CTA';

import ME from '../../assets/images/me-new.jpeg';
import HeaderSocials from './HeaderSocials';

import './header.css';

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Enzo Ariel Colinecul</h1>
        <Typical
          steps={['Cybersecurity Engineer', 2000, 'IAM Security Engineer', 2000, 'Software Engineer', 2000]}
          loop={Infinity}
          wrapper="h5"
        />
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
