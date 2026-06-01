import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiTwotonePlayCircle } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { CgSmileNone } from 'react-icons/cg';
import { MdOutlineOpenInNew } from 'react-icons/md';

function Project({
  img, title, description, repositoryLink, demo, caseStudy,
}) {
  return (
    <div className="portfolio__item">
      <div className="portfolio__img">
        <img src={img} alt={title} />
      </div>
      <div className="portfolio__content">
        <h2>{title}</h2>
        <p>
          {description}
        </p>
        <div className="portfolio__btn-container">
          {repositoryLink === null ? (<div />) : (
            <a href={repositoryLink} target="_blank" className="btn btn-primary" rel="noreferrer">
              <BsGithub />
              View in Github
            </a>
          )}
          {demo === null ? '' : (
            <a href={demo} target="_blank" className="btn btn-primary" rel="noreferrer">
              <AiTwotonePlayCircle />
              Live Demo
            </a>
          )}
          {caseStudy === null ? '' : (
            <Link to={caseStudy} className="btn btn-primary">
              <MdOutlineOpenInNew />
              Case Study
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  img: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  repositoryLink: PropTypes.string,
  demo: PropTypes.string,
  caseStudy: PropTypes.string,
};

Project.defaultProps = {
  img: <CgSmileNone />,
  title: 'No title Add',
  description: 'No Description',
  repositoryLink: null,
  demo: null,
  caseStudy: null,
};

export default Project;
