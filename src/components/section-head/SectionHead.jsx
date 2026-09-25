import PropTypes from 'prop-types';

function SectionHead({
  index, id, title, note,
}) {
  return (
    <header className="section-head">
      <span className="section-head__index mono" aria-hidden="true">{`(${index})`}</span>
      <h2 id={id} className="section-head__title">{title}</h2>
      {note ? <p className="section-head__note mono">{note}</p> : <span />}
    </header>
  );
}

SectionHead.propTypes = {
  index: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  note: PropTypes.string,
};

SectionHead.defaultProps = {
  note: '',
};

export default SectionHead;
