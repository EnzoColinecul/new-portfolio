import { earlierRoles, experience } from '../../data/profile';
import SectionHead from '../section-head/SectionHead';
import './experience.css';

function period(job) {
  const start = job.roles[job.roles.length - 1].date.split('–')[0].trim();
  const end = job.roles[0].date.split('–')[1].trim();
  return [start, end];
}

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHead
          index="02"
          id="experience-title"
          title={(
            <>
              Where I&apos;ve made an
              {' '}
              <em>impact</em>
            </>
          )}
          note="2016 — 2026"
        />

        <ol className="ledger">
          {experience.map((job) => {
            const [start, end] = period(job);
            return (
              <li className="ledger__row" key={job.company}>
                <p className="ledger__period mono">
                  <span>{end}</span>
                  <span className="ledger__period-sep" aria-hidden="true" />
                  <span>{start}</span>
                </p>

                <div className="ledger__org">
                  <h3 className="ledger__company serif">{job.company}</h3>
                  <p className="ledger__location mono">{job.location}</p>
                </div>

                <div className="ledger__detail">
                  <ul className="ledger__roles">
                    {job.roles.map((role) => (
                      <li key={role.title}>
                        <span className="ledger__role">{role.title}</span>
                        {job.roles.length > 1 ? <span className="ledger__role-date mono">{role.date}</span> : null}
                      </li>
                    ))}
                  </ul>
                  <ul className="ledger__bullets">
                    {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <p className="ledger__tools mono">
                    <span className="sr-only">Tools: </span>
                    {job.tags.join(' / ')}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="ledger__earlier">
          <h3 className="mono">Earlier</h3>
          <ul>
            {earlierRoles.map((role) => (
              <li key={role.title}>
                <span className="mono ledger__earlier-date">{role.date}</span>
                <span>{role.title}</span>
                <span className="ledger__earlier-company">{role.company}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
