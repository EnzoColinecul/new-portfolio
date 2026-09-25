import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import { HiArrowRight, HiOutlineExternalLink } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import { featuredProjects, otherProjects } from '../../data/profile';
import './projects.css';

function ProjectLink({ link }) {
  if (link.internal) {
    return (
      <Link to={link.to} className="text-link">
        {link.label}
        <HiArrowRight aria-hidden="true" />
      </Link>
    );
  }
  const isCode = link.href.includes('github.com');
  return (
    <a href={link.href} target="_blank" rel="noreferrer" className="text-link">
      {isCode ? <BsGithub aria-hidden="true" /> : null}
      {link.label}
      {!isCode ? <HiOutlineExternalLink aria-hidden="true" /> : null}
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
        <div className="section__head">
          <p className="section__eyebrow">Projects</p>
          <h2 id="projects-title" className="section__title">Things I&apos;ve built</h2>
          <p className="section__lede">
            Products, client work and side projects built outside my day job.
          </p>
        </div>

        <ul className="projects__featured">
          {featuredProjects.map((project) => (
            <li key={project.title} className="project card">
              <div className="project__media">
                <img
                  src={project.img}
                  alt={`${project.title} preview`}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                />
              </div>
              <div className="project__content">
                <p className="project__kind">{project.kind}</p>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__desc">{project.description}</p>
                <ul className="tags" aria-label="Tech stack">
                  {project.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
                </ul>
                <div className="project__links">
                  {project.links.map((link) => <ProjectLink key={link.label} link={link} />)}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="projects__subhead">More projects</h3>
        <ul className="projects__more">
          {otherProjects.map((project) => (
            <li key={project.title} className="project-mini card">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <ul className="tags" aria-label="Tech stack">
                {project.tags.map((tag) => <li className="tag" key={tag}>{tag}</li>)}
              </ul>
              <div className="project__links">
                {project.links.map((link) => <ProjectLink key={link.label} link={link} />)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
