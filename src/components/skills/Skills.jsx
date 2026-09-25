import { skills } from '../../data/profile';
import SectionHead from '../section-head/SectionHead';
import './skills.css';

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHead
          index="04"
          id="skills-title"
          title={(
            <>
              The
              {' '}
              <em>toolkit</em>
            </>
          )}
          note="What I reach for day to day"
        />

        <div className="toolkit">
          {skills.map((group, index) => (
            <div className="toolkit__group" key={group.title}>
              <h3 className="toolkit__title mono">
                <span aria-hidden="true">{`${String.fromCharCode(97 + index)}.`}</span>
                {' '}
                {group.title}
              </h3>
              <ul className="toolkit__list" translate="no">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
