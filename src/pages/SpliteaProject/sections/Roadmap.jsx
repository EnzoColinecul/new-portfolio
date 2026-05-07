import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const columns = [
  {
    label: 'Now',
    period: 'Q2 2026',
    items: ['Auth & friends', 'Groups', 'Manual expense', 'Settle-up', 'Receipt scan + AI split', 'Voice intent', 'Notifications'],
  },
  {
    label: 'Next',
    period: 'Q3 2026',
    items: ['Wallet provider deep-links', 'Multi-currency', 'Recurring expenses', 'Group digest', 'Push notifications'],
  },
  {
    label: 'Later',
    period: 'Q4 2026',
    items: ['One-tap settle', 'Smart suggestions', 'Trip mode', 'Web client', 'Public REST API'],
  },
  {
    label: 'Vision',
    period: '2027',
    items: ['Auto-categorization', 'Predictive balance', 'Group savings goals', 'Embedded checkout splits', 'Splitea for businesses'],
  },
];

function Roadmap() {
  const [ref, isInView] = useInView(0.25);

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-roadmap ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <Brand section="Roadmap" />
      <div className="splitea-section__inner">
        <p className="splitea-eyebrow">Roadmap</p>
        <h2 className="splitea-headline">
          Where we are,
          <br />
          and where this is going.
        </h2>
        <div className="splitea-roadmap__grid stagger">
          {columns.map(({ label, period, items }) => (
            <article key={label} className="splitea-roadmap__column">
              <div>
                <span className="splitea-roadmap__period">{period}</span>
                <h3>{label}</h3>
              </div>
              <ul>
                {items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
