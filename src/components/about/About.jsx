import { contact, languages } from '../../data/profile';
import './about.css';

const facts = [
  ['Based in', contact.location],
  ['Open to', 'Roles across Australia · relocation OK'],
  ['Focus', 'Cloud IAM · security automation · LLM agents'],
  ['Languages', languages.join(' · ')],
];

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about__grid">
        <div>
          <p className="section__eyebrow">About</p>
          <h2 id="about-title" className="section__title">
            Security engineer who ships automation, not tickets.
          </h2>
          <div className="about__body">
            <p>
              I spent the last few years inside Mercado Libre&apos;s security team, one of Latin
              America&apos;s largest tech companies with 120k+ employees, owning how engineers get
              access to AWS, GCP and Azure. My job was to make that access both safe and fast:
              APIs and automations instead of manual approvals, temporary credentials instead of
              permanent ones.
            </p>
            <p>
              More recently I&apos;ve focused on applied AI. I built an agentic LLM workflow that
              reviews cloud permission requests, spots the risky actions and asks the right
              follow-up questions, and I&apos;m an AWS Certified AI Practitioner.
            </p>
            <p>
              I learn quickly, like clear goals and enjoy working closely with a team. Now based in
              Melbourne, I&apos;m looking for my next role in cybersecurity, IAM or AI automation.
            </p>
          </div>
        </div>

        <dl className="about__facts card">
          {facts.map(([term, value]) => (
            <div className="about__fact" key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default About;
