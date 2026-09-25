import ME from '../../assets/images/me-new.jpeg';
import { contact, languages } from '../../data/profile';
import SectionHead from '../section-head/SectionHead';
import './about.css';

const facts = [
  ['Based in', contact.location],
  ['Open to', 'Roles across Australia, relocation OK'],
  ['Focus', 'Cloud IAM, security automation, LLM agents'],
  ['Languages', languages.join(' · ')],
];

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead index="01" id="about-title" title="About" note="The short version" />

        <div className="about__grid">
          <figure className="about__photo">
            <img src={ME} alt="Enzo Ariel Colinecul" width="640" height="640" loading="lazy" />
            <figcaption className="mono">Fig. 01 — Enzo, off the clock</figcaption>
          </figure>

          <div className="about__content">
            <p className="about__pull serif">
              A security engineer who ships
              {' '}
              <em>automation</em>
              , not tickets.
            </p>

            <div className="about__body">
              <p>
                I spent three years in Mercado Libre&apos;s security team, one of Latin
                America&apos;s largest tech companies with 120k+ employees, owning how engineers get
                access to AWS, GCP and Azure. The job was to make access both safe and fast: APIs
                and automation instead of manual approvals, temporary credentials instead of
                permanent ones.
              </p>
              <p>
                Lately I&apos;ve focused on applied AI. I built an agentic LLM workflow that reviews
                cloud permission requests, flags risky actions and asks the right follow-up
                questions, and I&apos;m an AWS Certified AI Practitioner. Now in Melbourne, looking
                for my next role in cybersecurity, IAM or AI automation.
              </p>
            </div>

            <dl className="about__facts">
              {facts.map(([term, value]) => (
                <div className="about__fact" key={term}>
                  <dt className="mono">{term}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
