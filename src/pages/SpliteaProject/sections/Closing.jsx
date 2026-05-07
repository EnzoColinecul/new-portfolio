import { Link } from 'react-router-dom';
import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

function Closing() {
  const [ref, isInView] = useInView(0.3);

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-closing ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <Brand section="Thank you" />
      <div className="splitea-closing__inner stagger">
        <p className="splitea-closing__eyebrow">The end · &amp; the beginning</p>
        <h2 className="splitea-closing__headline">
          Settle up.
          <br />
          Move on.
        </h2>
        <p className="splitea-closing__lede">
          Less time on the math. More time on the dinner.
        </p>
        <div className="splitea-closing__contact">
          <span className="splitea-closing__contact-label">Get in touch</span>
          <a className="splitea-closing__email" href="mailto:enzocolinecul1997@gmail.com">
            enzocolinecul1997@gmail.com
          </a>
        </div>
        <Link to="/" className="splitea-closing__back">← back to portfolio</Link>
      </div>
    </section>
  );
}

export default Closing;
