import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const services = [
  {
    icon: '🏡',
    title: 'Residential Carpet Cleaning',
    body: 'Deep steam cleaning for homes. Removes allergens, bacteria, and embedded dirt that vacuuming can\'t reach.',
    tag: 'Most popular',
  },
  {
    icon: '🛋️',
    title: 'Upholstery Cleaning',
    body: 'Sofas, mattresses, and chairs cleaned with fabric-safe products. No harsh chemicals, safe for families.',
    tag: null,
  },
  {
    icon: '🏢',
    title: 'Commercial Cleaning',
    body: 'Office and retail spaces serviced with minimal disruption — scheduled around your business hours.',
    tag: null,
  },
  {
    icon: '🍷',
    title: 'Stain Removal',
    body: 'Targeted treatment for wine, coffee, pet accidents, and ink. Around 90% of stains are fully removable.',
    tag: '~90% removable',
  },
  {
    icon: '🐾',
    title: 'Pet Stains & Odour Removal',
    body: 'Specialist enzyme treatments that neutralize odour at the source. Safe for pets and children.',
    tag: null,
  },
  {
    icon: '💧',
    title: 'Water Damage Restoration',
    body: 'Emergency extraction, drying, and sanitizing for burst pipes, flooding, and storm damage.',
    tag: 'Emergency service',
  },
];

function Services() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className={`crystal-section ${isInView ? 'crystal-section--visible' : ''}`}
    >
      <Brand section="Services" />
      <div className="crystal-section__inner">
        <p className="crystal-eyebrow">What we built for</p>
        <h2 className="crystal-headline">
          Six services.
          <br />
          One clear layout.
        </h2>
        <p className="crystal-lede">
          Each service gets its own card — headline, description, and a trust
          signal. No walls of text, no buried information. A visitor should
          know in ten seconds whether Kyal can solve their problem.
        </p>
        <div className="crystal-grid crystal-grid--three stagger">
          {services.map(({
            icon, title, body, tag,
          }) => (
            <article key={title} className="crystal-card crystal-card--service">
              <div className="crystal-card__top">
                <span className="crystal-card__icon" aria-hidden="true">{icon}</span>
                {tag && <span className="crystal-tag">{tag}</span>}
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
