import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const goals = [
  {
    icon: '🏠',
    title: 'Local credibility',
    body: 'Compete with larger chains by presenting a polished, trustworthy brand that signals quality before a word is read.',
  },
  {
    icon: '📞',
    title: 'Lead generation',
    body: 'Every section drives one action — contact. Clear CTAs, phone number always visible, quote form above the fold.',
  },
  {
    icon: '⭐',
    title: 'Social proof',
    body: 'Real Google reviews and a 5.0-star rating featured prominently so visitors feel confident before they call.',
  },
  {
    icon: '📱',
    title: 'Mobile-first',
    body: 'Most local searches happen on phones. The layout was designed and tested mobile-first from day one.',
  },
];

const stats = [
  { value: '6', label: 'services clearly explained' },
  { value: '5.0★', label: 'Google rating displayed' },
  { value: '1', label: 'CTA repeated across every section' },
];

function Brief() {
  const [ref, isInView] = useInView(0.3);

  return (
    <section
      ref={ref}
      className={`crystal-section ${isInView ? 'crystal-section--visible' : ''}`}
    >
      <Brand section="The brief" />
      <div className="crystal-section__inner">
        <p className="crystal-eyebrow">The brief</p>
        <h2 className="crystal-headline">
          A local business that needed
          <br />
          to look the part online.
        </h2>
        <p className="crystal-lede">
          Kyal runs a fully insured, owner-operated cleaning service in Auckland.
          Great at the job — but his online presence wasn&apos;t reflecting that.
          The brief: a site that builds trust fast and converts visitors to leads.
        </p>
        <div className="crystal-grid crystal-grid--four stagger">
          {goals.map(({ icon, title, body }) => (
            <article key={title} className="crystal-card">
              <span className="crystal-card__icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="crystal-stats stagger">
          {stats.map(({ value, label }) => (
            <div key={label} className="crystal-stat">
              <span className="crystal-stat__value">{value}</span>
              <span className="crystal-stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brief;
