import useInView from '../hooks/useInView';

function Cover() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className={`crystal-section crystal-cover ${isInView ? 'crystal-section--visible' : ''}`}
    >
      <div className="crystal-cover__inner stagger">
        <div className="crystal-cover__icon" aria-hidden="true">✦</div>
        <h1 className="crystal-cover__title">
          Crystal Carpet
          <br />
          <em>Clean</em>
        </h1>
        <p className="crystal-cover__tagline">Spotless every time.</p>
        <p className="crystal-cover__subtitle">
          A conversion-focused website for a locally-owned carpet and
          upholstery cleaning business in Auckland, NZ — built to earn
          trust and turn visitors into bookings.
        </p>
        <div className="crystal-cover__pills">
          <span className="crystal-pill">React · Vite</span>
          <span className="crystal-pill">Tailwind CSS</span>
          <span className="crystal-pill">Vercel</span>
        </div>
        <a
          className="crystal-cover__cta"
          href="https://crystalcarpetclean.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          View live site →
        </a>
      </div>
      <div className="crystal-scroll-prompt" aria-hidden="true">
        <span>scroll to explore</span>
        <span className="crystal-scroll-prompt__chevron">&#x2304;</span>
      </div>
    </section>
  );
}

export default Cover;
