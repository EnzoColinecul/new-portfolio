import { useState } from 'react';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { GiAchievement } from 'react-icons/gi';
import { RiContactsBook2Line, RiServiceLine } from 'react-icons/ri';

import './nav.css';

function Nav() {
  const [active, setActive] = useState('#home');
  const links = [
    ['#home', 'Home', AiOutlineHome],
    ['#about', 'About', AiOutlineUser],
    ['#skills', 'Skills', BiBook],
    ['#certifications', 'Certifications', GiAchievement],
    ['#services', 'Services', RiServiceLine],
    ['#contact', 'Contact', RiContactsBook2Line],
  ];

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      {links.map(([href, label, Icon]) => (
        <a
          key={href}
          href={href}
          onClick={() => setActive(href)}
          className={active === href ? 'active' : ''}
          aria-label={label}
          aria-current={active === href ? 'location' : undefined}
        >
          <Icon aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}

export default Nav;
