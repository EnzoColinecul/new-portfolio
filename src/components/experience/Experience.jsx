import { earlierRoles, experience } from '../../data/profile';
import './experience.css';

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Experience</p>
          <h2 id="experience-title" className="section__title">Where I&apos;ve made an impact</h2>
        </div>

        <ol className="xp">
          {experience.map((job) => (
            <li className="xp__item" key={job.company}>
              <div className="xp__meta">
                <h3 className="xp__company">{job.company}</h3>
                <p className="xp__location">{job.location}</p>
              </div>

              <div className="xp__body card">
                <ul className="xp__roles">
                  {job.roles.map((role) => (
                    <li key={role.title}>
                      <span className="xp__role">{role.title}</span>
                      <span className="xp__date">{role.date}</span>
                    </li>
                  ))}
                </ul>
                <ul className="xp__bullets">
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <ul className="tags" aria-label="Tools and skills">
                  {job.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="xp__earlier">
          <h3>Earlier</h3>
          <ul>
            {earlierRoles.map((role) => (
              <li key={role.title}>
                <span className="xp__earlier-title">{role.title}</span>
                <span className="xp__earlier-company">{role.company}</span>
                <span className="xp__date">{role.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
