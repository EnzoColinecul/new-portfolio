import { contact, languages } from '../../data/profile';
import SectionHead from '../section-head/SectionHead';
import './about.css';

const facts = [
  ['Based in', contact.location],
  ['Open to', 'Remote, hybrid or on-site · relocation within Australia'],
  ['Focus', 'AI engineering, agentic workflows, cloud IAM'],
  ['Languages', languages.join(' · ')],
];

function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <SectionHead index="01" id="about-title" title="About" note="The short version" />

        <div className="about__grid">
          <p className="about__pull serif">
            I ship AI to
            {' '}
            <em>production</em>
            , not just prototypes.
          </p>

          <div className="about__content">
            <div className="about__body">
              <p>
                I spent three years in Mercado Libre&apos;s security team, one of Latin
                America&apos;s largest tech companies, owning how engineers get access to AWS, GCP
                and Azure. I automated what used to be manual: permission reviews, credential
                handling, cross-account roles and a 10,000-user identity migration.
              </p>
              <p>
                That work pulled me into applied AI. I built an LLM agent that reviews cloud
                permission requests and the IAM agent of a multi-agent RAG assistant, and learned
                the hard parts in production: hallucinations, evaluation, cost and graceful failure.
              </p>
              <p>
                I was also a technical focal point for my team, scoping requests with stakeholders,
                mentoring junior engineers and reviewing code across repositories. Now based in
                Melbourne, I&apos;m looking for my next role in AI engineering, agentic automation
                or cloud security.
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
