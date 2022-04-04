import React from 'react';
import { BiAbacus } from 'react-icons/bi';
import PropTypes from 'prop-types';

function Card({ iconName, technologyName }) {
  return (
    <div className="experience__card-container">
      <div className="experience__card-img-container">
        {iconName}
      </div>
      <div className="experience__card-title-container">
        <div className="experience__card-title">
          <h5>What I built with</h5>
          <h2>{technologyName}</h2>
        </div>
      </div>
      <div className="experience__card-text-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni blanditiis, dolores tenetut recusandae, molestiae ipsa,
          illum quidem ipsum eius rerum culpa.
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  iconName: PropTypes.element,
  technologyName: PropTypes.string,
};

Card.defaultProps = {
  iconName: <BiAbacus />,
  technologyName: 'Not input name',
};

export default Card;
