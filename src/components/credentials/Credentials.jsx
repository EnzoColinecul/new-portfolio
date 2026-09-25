import { HiOutlineBadgeCheck, HiOutlineExternalLink } from 'react-icons/hi';

import { certifications, education } from '../../data/profile';
import './credentials.css';

function Credentials() {
  return (
    <section id="credentials" className="section" aria-labelledby="credentials-title">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Credentials</p>
          <h2 id="credentials-title" className="section__title">Certifications &amp; education</h2>
        </div>

        <div className="creds__grid">
          <div>
            <h3 className="creds__subhead">Certifications</h3>
            <ul className="creds__list">
              {certifications.map((cert) => (
                <li key={cert.title} className="cred card">
                  <HiOutlineBadgeCheck className="cred__icon" aria-hidden="true" />
                  <div className="cred__text">
                    <p className="cred__title">{cert.title}</p>
                    <p className="cred__meta">
                      {cert.issuer}
                      {cert.date ? ` · ${cert.date}` : ''}
                    </p>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-link cred__verify"
                    aria-label={`Verify ${cert.title}`}
                  >
                    Verify
                    <HiOutlineExternalLink aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="creds__subhead">Education</h3>
            <ul className="creds__list">
              {education.map((item) => (
                <li key={item.title} className="edu card">
                  <p className="cred__title">{item.title}</p>
                  <p className="cred__meta">{item.school}</p>
                  <p className="edu__date">{item.date}</p>
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
