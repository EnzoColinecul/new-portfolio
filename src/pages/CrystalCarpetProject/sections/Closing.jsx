import { Link } from 'react-router-dom';
import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

function Closing() {
  const [ref, isInView] = useInView(0.3);

  return (
    <section
      ref={ref}
      className={`crystal-section crystal-closing ${isInView ? 'crystal-section--visible' : ''}`}
    >
      <Brand section="Done" />
      <div className="crystal-closing__inner stagger">
        <p className="crystal-closing__eyebrow">Live in Auckland · Built to convert</p>
        <h2 className="crystal-closing__headline">
          Clean carpets.
          <br />
          Clean code.
        </h2>
        <p className="crystal-closing__lede">
          A professional website that earns trust before the first phone call —
          and keeps it with every scroll.
        </p>
        <a
          className="crystal-closing__live"
          href="https://crystalcarpetclean.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Visit the live site →
        </a>
        <div className="crystal-closing__contact">
          <span className="crystal-closing__contact-label">Have a project in mind?</span>
          <a className="crystal-closing__email" href="mailto:enzocolinecul1997@gmail.com">
            enzocolinecul1997@gmail.com
          </a>
        </div>
        <Link to="/" className="crystal-closing__back">← back to portfolio</Link>
      </div>
    </section>
  );
}

export default Closing;
