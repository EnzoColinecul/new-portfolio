import PropTypes from 'prop-types';
import logo from '../../../assets/images/splitea-icon.png';

function Brand({ section }) {
  return (
    <div className="splitea-brand" aria-hidden="true">
      <img src={logo} alt="" className="splitea-brand__logo" />
      {section && (
        <>
          <span className="splitea-brand__sep">·</span>
          <span className="splitea-brand__section">{section}</span>
        </>
      )}
    </div>
  );
}

Brand.propTypes = {
  section: PropTypes.string,
};

Brand.defaultProps = {
  section: '',
};

export default Brand;
