import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { featuredProjects, otherProjects } from '../../data/profile';
import SectionHead from '../section-head/SectionHead';
import AgentVisual from './AgentVisual';
import './projects.css';

function ProjectLink({ link }) {
  if (link.internal) {
    return (
      <Link to={link.to} className="u-link">
        {link.label}
        <span aria-hidden="true">→</span>
      </Link>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noreferrer" className="u-link">
      {link.label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

ProjectLink.propTypes = {
  link: PropTypes.shape({
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    to: PropTypes.string,
    internal: PropTypes.bool,
  }).isRequired,
};

function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHead
          index="03"
          id="projects-title"
          title={(
            <>
              Selected
              {' '}
              <em>work</em>
            </>
          )}
          note="Products, client work & side builds"
        />

        <ol className="works">
          {featuredProjects.map((project, index) => (
            <li key={project.title} className="work">
              <span className="work__num serif" aria-hidden="true">{`0${index + 1}`}</span>
              <div className={`work__media${project.visual ? ' work__media--visual' : ''}`}>
                {project.visual === 'agent' ? <AgentVisual /> : (
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    width={project.width}
                    height={project.height}
                    loading="lazy"
                  />
                )}
              </div>
              <div className="work__content">
                <p className="work__kind mono">{project.kind}</p>
                <h3 className="work__title serif">{project.title}</h3>
                <p className="work__desc">{project.description}</p>
                {project.points.length > 0 && (
                  <ul className="work__points">
                    {project.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                )}
                <p className="work__stack mono">
                  <span className="sr-only">Stack: </span>
                  {project.tags.join(' / ')}
                </p>
                {project.links.length > 0 && (
                  <div className="work__links">
                    {project.links.map((link) => <ProjectLink key={link.label} link={link} />)}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>

        <div className="archive">
          <h3 className="archive__title mono">Archive</h3>
          <ul>
            {otherProjects.map((project) => (
              <li key={project.title} className="archive__row">
                <h4 className="archive__name serif">{project.title}</h4>
                <p className="archive__desc">{project.description}</p>
                <p className="archive__stack mono">{project.tags.join(' / ')}</p>
                <div className="archive__links">
                  {project.links.map((link) => <ProjectLink key={link.label} link={link} />)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
