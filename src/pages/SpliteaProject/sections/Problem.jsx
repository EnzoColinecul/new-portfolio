import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const painPoints = [
  { icon: '🧮', title: 'Mental math', body: 'Tax, tip, who had the appetizer — calculated in heads or napkins.' },
  { icon: '💬', title: 'WhatsApp threads', body: 'Receipts and Venmo screenshots scattered across chat history.' },
  { icon: '📊', title: 'Spreadsheets', body: 'A "Trips" tab that nobody updates after day two.' },
  { icon: '⏰', title: 'Venmo nudges', body: 'Days of awkward reminders before everyone is settled.' },
];

const stats = [
  { value: '~40 min', label: 'spent reconciling a single group dinner' },
  { value: '7 of 10', label: 'groups admit money causes friction' },
  { value: '#1', label: 'request — just tell us who owes what' },
];

function Problem() {
  const [ref, isInView] = useInView(0.3);

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-problem ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <Brand section="The problem" />
      <div className="splitea-section__inner">
        <p className="splitea-eyebrow">The problem</p>
        <h2 className="splitea-headline">
          Three friends, one receipt,
          <br />
          forty minutes.
        </h2>
        <p className="splitea-lede">
          Splitting a bill is not a math problem. It is a social one — and the
          tools that exist today turn it into homework.
        </p>
        <div className="splitea-grid splitea-grid--four stagger">
          {painPoints.map(({ icon, title, body }) => (
            <article key={title} className="splitea-card">
              <span className="splitea-card__icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="splitea-stats stagger">
          {stats.map(({ value, label }) => (
            <div key={label} className="splitea-stat">
              <span className="splitea-stat__value">{value}</span>
              <span className="splitea-stat__label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problem;
