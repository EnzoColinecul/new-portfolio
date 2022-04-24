import React from 'react';
import PropTypes from 'prop-types';
import { BsGithub } from 'react-icons/bs';
import { CgSmileNone } from 'react-icons/cg';
import { AiTwotonePlayCircle } from 'react-icons/ai';

function Project({
  img, title, description, repositoryLink, demo,
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
};

Project.defaultProps = {
  img: <CgSmileNone />,
  title: 'No title Add',
  description: 'No Description',
  repositoryLink: null,
  demo: null,
};

export default Project;
