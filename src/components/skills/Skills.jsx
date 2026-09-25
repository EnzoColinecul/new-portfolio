import { skills } from '../../data/profile';
import './skills.css';

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <div className="section__head">
          <p className="section__eyebrow">Skills</p>
          <h2 id="skills-title" className="section__title">Tools I use day to day</h2>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__group" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tags" translate="no">
                {group.items.map((item) => <li className="tag skills__tag" key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
