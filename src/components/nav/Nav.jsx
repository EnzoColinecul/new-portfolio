import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiOutlineDownload, HiX } from 'react-icons/hi';

import CV from '../../assets/pdf/Enzo_Ariel_Colinecul_CV.pdf';
import './nav.css';

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['credentials', 'Credentials'],
  ['contact', 'Contact'],
];

function useActiveSection(ids) {
  const [active, setActive] = useState('');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = ['home', ...links.map(([id]) => id)];

function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}`}>
      <div className="container site-nav__inner">
        <a href="#home" className="site-nav__brand" onClick={() => setOpen(false)}>
          <span className="site-nav__mark" aria-hidden="true">EC</span>
          <span>Enzo Colinecul</span>
        </a>

        <nav aria-label="Primary navigation" className={`site-nav__menu${open ? ' is-open' : ''}`} id="primary-menu">
          <ul>
            {links.map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? 'is-active' : ''}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-nav__actions">
          <a href={CV} download="Enzo_Colinecul_CV.pdf" className="btn btn-primary btn-sm">
            <HiOutlineDownload aria-hidden="true" />
            <span>CV</span>
          </a>
          <button
            type="button"
            className="site-nav__toggle"
            aria-expanded={open}
            aria-controls="primary-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <HiX aria-hidden="true" /> : <HiMenuAlt3 aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
