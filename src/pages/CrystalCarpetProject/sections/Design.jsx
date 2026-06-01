import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const decisions = [
  {
    num: '01',
    title: 'Trust before features',
    body: 'The hero leads with a credibility signal — owner name, rating, and years of experience — before any service is listed. Visitors decide in 3 seconds.',
  },
  {
    num: '02',
    title: 'Single-column on mobile',
    body: 'Local searches are 70%+ mobile. Every section was built mobile-first, then expanded to wider layouts. No desktop afterthought.',
  },
  {
    num: '03',
    title: 'Persistent contact anchors',
    body: 'Phone number and "Get a Quote" button are accessible at every scroll position. Friction to contact is near zero.',
  },
  {
    num: '04',
    title: 'Before / after proof',
    body: 'Real results are more persuasive than any copy. Before/after imagery is placed directly after service descriptions.',
  },
  {
    num: '05',
    title: 'Eco-friendly messaging',
    body: 'A key differentiator for the Auckland market. Eco-friendly product badges are surfaced on the services that support it.',
  },
  {
    num: '06',
    title: 'Same-day quote response',
    body: 'Speed = trust for service businesses. The quote form copy promises same-day response, reducing hesitation to submit.',
  },
];

function Design() {
  const [ref, isInView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className={`crystal-section ${isInView ? 'crystal-section--visible' : ''}`}
    >
      <Brand section="Design decisions" />
      <div className="crystal-section__inner">
        <p className="crystal-eyebrow">Design decisions</p>
        <h2 className="crystal-headline">
          Every choice made
          <br />
          to convert.
        </h2>
        <p className="crystal-lede">
          A local service site lives or dies on trust. These were the six
          decisions that shaped the layout, copy hierarchy, and UX.
        </p>
        <div className="crystal-decision-grid stagger">
          {decisions.map(({ num, title, body }) => (
            <article key={num} className="crystal-decision">
              <span className="crystal-decision__num">{num}</span>
              <div className="crystal-decision__content">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Design;
