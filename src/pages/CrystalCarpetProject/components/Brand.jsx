import PropTypes from 'prop-types';

function Brand({ section }) {
  return (
    <div className="crystal-brand" aria-hidden="true">
      <span className="crystal-brand__mark">✦</span>
      <span className="crystal-brand__name">Crystal Carpet Clean</span>
      {section && (
        <>
          <span className="crystal-brand__sep">·</span>
          <span className="crystal-brand__section">{section}</span>
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
