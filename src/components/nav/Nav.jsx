import { useEffect, useState } from 'react';

import { cv } from '../../data/profile';
import './nav.css';

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['credentials', 'Credentials'],
  ['contact', 'Contact'],
];

const sectionIds = ['home', ...links.map(([id]) => id)];

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
    <header className={`site-nav${scrolled ? ' site-nav--scrolled' : ''}${open ? ' site-nav--open' : ''}`}>
      <div className="container site-nav__inner">
        <a href="#home" className="site-nav__brand" onClick={() => setOpen(false)}>
          <span className="site-nav__initials serif" aria-hidden="true">E.C.</span>
          <span className="site-nav__name mono">Enzo Colinecul</span>
        </a>

        <nav aria-label="Primary navigation" className="site-nav__menu" id="primary-menu">
          <ol>
            {links.map(([id, label], index) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={active === id ? 'is-active' : ''}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  <span className="site-nav__num" aria-hidden="true">{`0${index + 1}`}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="site-nav__actions">
          <a href={cv.href} target={cv.target} rel="noreferrer" download={cv.download} className="site-nav__cv mono">
            Résumé
            <span aria-hidden="true">↓</span>
          </a>
          <button
            type="button"
            className="site-nav__toggle mono"
            aria-expanded={open}
            aria-controls="primary-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
