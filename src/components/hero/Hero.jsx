import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiArrowRight, HiOutlineDownload, HiOutlineMail } from 'react-icons/hi';

import ME from '../../assets/images/me-new.jpeg';
import CV from '../../assets/pdf/Enzo_Ariel_Colinecul_CV.pdf';
import { contact, highlights } from '../../data/profile';
import './hero.css';

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            Open to new roles · Melbourne, VIC
          </p>
          <h1 id="hero-name" className="hero__name">Enzo Ariel Colinecul</h1>
          <p className="hero__role">
            Cybersecurity &amp;
            {' '}
            <span className="hero__role-accent">AI Automation Engineer</span>
          </p>
          <p className="hero__lede">
            I automate cloud access so teams move fast without losing control. 4+ years of IAM
            and security engineering at Mercado Libre and Naranja X, from multi-cloud access
            tooling on AWS, GCP and Azure to LLM agents that review permission requests.
          </p>

          <div className="hero__cta">
            <a href="#experience" className="btn btn-primary">
              See my experience
              <HiArrowRight aria-hidden="true" />
            </a>
            <a href={CV} download="Enzo_Colinecul_CV.pdf" className="btn">
              <HiOutlineDownload aria-hidden="true" />
              Download CV
            </a>
          </div>

          <ul className="hero__socials" aria-label="Profiles">
            <li>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <BsLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noreferrer">
                <BsGithub aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`}>
                <HiOutlineMail aria-hidden="true" />
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <img
              src={ME}
              alt="Portrait of Enzo Ariel Colinecul"
              width="640"
              height="640"
              loading="eager"
              fetchpriority="high"
            />
          </div>
          <div className="hero__badge card">
            <span className="hero__badge-label">Certified</span>
            <span className="hero__badge-value">AWS AI Practitioner</span>
          </div>
        </div>
      </div>

      <div className="container">
        <dl className="hero__stats">
          {highlights.map((item) => (
            <div className="hero__stat" key={item.label}>
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
