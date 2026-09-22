import Typical from 'react-typical';
import CTA from './CTA';
import SpliteaCTA from './SpliteaCTA';

import ME from '../../assets/images/me-new.jpeg';
import HeaderSocials from './HeaderSocials';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

import './header.css';

function Header() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const roles = ['Cybersecurity Engineer', 'IAM Security Engineer', 'AI Automation Engineer'];

  return (
    <header id="home">
      <div className="container header__container">
        <p className="header__eyebrow">Hello, I&apos;m</p>
        <h1>Enzo Ariel Colinecul</h1>
        <p className="header__role">
          <span className="sr-only">{roles[0]}</span>
          {!prefersReducedMotion && (
            <span aria-hidden="true">
              <Typical
                steps={['Cybersecurity Engineer', 2000, 'IAM Security Engineer', 2000, 'AI Automation Engineer', 2000]}
                loop={Infinity}
                wrapper="span"
              />
            </span>
          )}
        </p>
        <SpliteaCTA />
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img
            src={ME}
            alt="Portrait of Enzo Ariel Colinecul"
            width="640"
            height="640"
            loading="eager"
            fetchpriority="high"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
