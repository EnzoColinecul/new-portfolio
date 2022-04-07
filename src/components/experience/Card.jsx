import React from 'react';
import { CgSmileNone } from 'react-icons/cg';
import PropTypes from 'prop-types';

function Card({ iconName, technologyName, proyects }) {
  const listProyects = proyects.split(',');

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
        <ul>
          {listProyects.map((proyectItem) => <li>{proyectItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

Card.propTypes = {
  iconName: PropTypes.element,
  technologyName: PropTypes.string,
  proyects: PropTypes.string,
};

Card.defaultProps = {
  iconName: <CgSmileNone className="experience__card-img" />,
  technologyName: 'Not added technologyName',
  proyects: 'none',
};

export default Card;
