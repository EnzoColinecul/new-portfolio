import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const metrics = [
  { value: '5.0★', label: 'Google rating', sub: 'across 48 reviews' },
  { value: '~90%', label: 'stain removal rate', sub: 'industry benchmark' },
  { value: '100%', label: 'satisfaction guarantee', sub: 'or we return — no charge' },
  { value: 'same day', label: 'quote response', sub: 'promised in the CTA copy' },
];

const trustItems = [
  { icon: '🔒', text: 'Fully insured — stated in the hero' },
  { icon: '🌿', text: 'Eco-friendly products — badged on relevant services' },
  { icon: '📍', text: 'Auckland-local — location named in page title for SEO' },
  { icon: '👤', text: 'Owner-operated — Kyal\'s name on the About section builds personal trust' },
];

function Results() {
  const [ref, isInView] = useInView(0.3);

  return (
    <section
      ref={ref}
      className={`crystal-section ${isInView ? 'crystal-section--visible' : ''}`}
    >
      <Brand section="Results" />
      <div className="crystal-section__inner">
        <p className="crystal-eyebrow">Results</p>
        <h2 className="crystal-headline">
          Numbers that
          <br />
          sell the service.
        </h2>
        <p className="crystal-lede">
          The site&apos;s job is to surface the proof Kyal already had —
          real reviews, a clean track record, and a personal guarantee.
          We just made it impossible to miss.
        </p>
        <div className="crystal-metrics stagger">
          {metrics.map(({ value, label, sub }) => (
            <div key={label} className="crystal-metric">
              <span className="crystal-metric__value">{value}</span>
              <span className="crystal-metric__label">{label}</span>
              <span className="crystal-metric__sub">{sub}</span>
            </div>
          ))}
        </div>
        <div className="crystal-trust stagger">
          <p className="crystal-trust__heading">Trust signals woven into the layout</p>
          <ul className="crystal-trust__list">
            {trustItems.map(({ icon, text }) => (
              <li key={text}>
                <span aria-hidden="true">{icon}</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Results;
