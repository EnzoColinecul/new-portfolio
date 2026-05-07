import logo from '../../../assets/images/splitea-icon.png';
import useInView from '../hooks/useInView';

function Cover() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-cover ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <div className="splitea-cover__inner stagger">
        <h1 className="splitea-cover__title">
          <img src={logo} alt="Splitea logo" />
        </h1>
        <p className="splitea-cover__tagline">Shared expenses, sorted.</p>
        <p className="splitea-cover__subtitle">
          From the awkward &ldquo;who owes what&rdquo; to actual settlement —
          in a few taps, with a little help from AI.
        </p>
        <div className="splitea-cover__pills">
          <span className="splitea-pill">React Native · Expo</span>
          <span className="splitea-pill">FastAPI · MySQL · AWS</span>
          <span className="splitea-pill">AI receipt workflows</span>
        </div>
      </div>
      <div className="splitea-scroll-prompt" aria-hidden="true">
        <span>scroll to explore</span>
        <span className="splitea-scroll-prompt__chevron">&#x2304;</span>
      </div>
    </section>
  );
}

export default Cover;
