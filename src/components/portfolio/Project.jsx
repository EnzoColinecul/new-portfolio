import PropTypes from 'prop-types';
import { AiTwotonePlayCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { CgSmileNone } from 'react-icons/cg';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Project({
  img, title, description, repositoryLink, demo, caseStudy, online, width, height, isVisible,
}) {
  const linkTabIndex = isVisible ? 0 : -1;

  return (
    <div className="portfolio__item">
      <div className="portfolio__img">
        {img ? (
          <img
            src={img}
            alt={`${title} project preview`}
            width={width}
            height={height}
            loading="lazy"
          />
        ) : <CgSmileNone aria-hidden="true" />}
      </div>
      <div className="portfolio__content">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <div className="portfolio__btn-container">
          {repositoryLink === null ? (<div />) : (
            <a href={repositoryLink} target="_blank" className="btn btn-primary" rel="noreferrer" tabIndex={linkTabIndex}>
              <BsGithub aria-hidden="true" />
              View in Github
            </a>
          )}
          {demo === null ? '' : (
            <a href={demo} target="_blank" className="btn btn-primary" rel="noreferrer" tabIndex={linkTabIndex}>
              <AiTwotonePlayCircle aria-hidden="true" />
              Live Demo
            </a>
          )}
          {caseStudy === null ? '' : (
            <Link to={caseStudy} className="btn btn-primary" tabIndex={linkTabIndex}>
              <MdOutlineOpenInNew aria-hidden="true" />
              Case Study
            </Link>
          )}
          {online === null ? '' : (
            <a href={online} target="_blank" className="btn btn-primary" rel="noreferrer" tabIndex={linkTabIndex}>
              <AiTwotonePlayCircle aria-hidden="true" />
              View Online
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  img: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  isVisible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  repositoryLink: PropTypes.string,
  demo: PropTypes.string,
  caseStudy: PropTypes.string,
  online: PropTypes.string,
};

Project.defaultProps = {
  img: null,
  width: undefined,
  height: undefined,
  isVisible: true,
  title: 'Untitled Project',
  description: 'No description available.',
  repositoryLink: null,
  demo: null,
  caseStudy: null,
  online: null,
};

export default Project;
