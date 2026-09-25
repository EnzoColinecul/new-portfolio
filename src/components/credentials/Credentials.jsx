import { certifications, education } from '../../data/profile';
import SectionHead from '../section-head/SectionHead';
import './credentials.css';

function Credentials() {
  return (
    <section id="credentials" className="section" aria-labelledby="credentials-title">
      <div className="container">
        <SectionHead index="05" id="credentials-title" title="Credentials" note="Verified certifications & education" />

        <div className="creds">
          <div>
            <h3 className="creds__label mono">Certifications</h3>
            <ul>
              {certifications.map((cert) => (
                <li key={cert.title} className="creds__row">
                  <span className="creds__date mono">{cert.date || '—'}</span>
                  <span className="creds__main">
                    <span className="creds__title serif">{cert.title}</span>
                    <span className="creds__issuer">{cert.issuer}</span>
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="u-link"
                    aria-label={`Verify ${cert.title}`}
                  >
                    Verify
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="creds__label mono">Education</h3>
            <ul>
              {education.map((item) => (
                <li key={item.title} className="creds__row creds__row--edu">
                  <span className="creds__date mono">{item.date}</span>
                  <span className="creds__main">
                    <span className="creds__title serif">{item.title}</span>
                    <span className="creds__issuer">{item.school}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Credentials;
