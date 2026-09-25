import CV from '../../assets/pdf/Enzo_Ariel_Colinecul_CV.pdf';
import { contact, highlights } from '../../data/profile';
import PolicyCard from './PolicyCard';
import './hero.css';

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-name">
      <div className="container">
        <div className="hero__meta mono">
          <span>Cybersecurity &amp; AI Automation Engineer</span>
          <span className="hero__coords">Melbourne, AU · 37.81°S 144.96°E</span>
          <span className="hero__available">
            <span className="hero__pulse" aria-hidden="true" />
            Available now
          </span>
        </div>

        <h1 id="hero-name" className="hero__name serif">
          <span className="hero__first">Enzo</span>
          {' '}
          <span className="hero__middle">Ariel</span>
          {' '}
          <span className="hero__last">Colinecul</span>
        </h1>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="hero__lede serif">
              I make cloud access
              {' '}
              <em>safe</em>
              {' '}
              and
              {' '}
              <em>fast.</em>
            </p>
            <p className="hero__body">
              4+ years in security engineering at Mercado Libre and Naranja X: automating IAM across
              AWS, GCP and Azure, replacing standing credentials with temporary ones, and building
              an LLM agent that reviews permission requests.
            </p>
            <div className="hero__cta">
              <a href={CV} download="Enzo_Colinecul_CV.pdf" className="btn btn-primary">
                Download résumé
                <span aria-hidden="true">↓</span>
              </a>
              <a href="#experience" className="btn">
                See experience
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <ul className="hero__links" aria-label="Profiles">
              <li><a className="u-link" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
              <li><a className="u-link" href={contact.github} target="_blank" rel="noreferrer">GitHub ↗</a></li>
              <li><a className="u-link" href={`mailto:${contact.email}`}>Email ↗</a></li>
            </ul>
          </div>

          <PolicyCard />
        </div>

        <dl className="hero__stats">
          {highlights.map((item) => (
            <div className="hero__stat" key={item.label}>
              <dt className="mono">{item.label}</dt>
              <dd className="serif">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Hero;
