import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const modes = [
  {
    step: 'Mode 01',
    title: 'Split with AI',
    icon: '✶',
    body: 'Snap the receipt, describe the split out loud, approve.',
    bullets: ['"Split everything 4 ways"', '"Burgers equal, drinks only Juan"', '"Tax & tip pro-rata"'],
    featured: true,
  },
  {
    step: 'Mode 02',
    title: 'Extract Total',
    icon: '◳',
    body: 'Auto-extract just the total from a photo. Type the rest.',
    bullets: ['OCR pulls subtotal, tax, total', 'You pick how to divide', 'Best for fixed-percent splits'],
  },
  {
    step: 'Mode 03',
    title: 'Manual Entry',
    icon: '✎',
    body: 'No camera, no voice. Just type the amount and split.',
    bullets: ['Equal, percent, or custom', 'Save as recurring', 'Works offline'],
  },
];

function AddExpense() {
  const [ref, isInView] = useInView(0.3);

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-modes ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <Brand section="Add expense" />
      <div className="splitea-section__inner">
        <p className="splitea-eyebrow">Three ways in</p>
        <h2 className="splitea-headline">
          Three ways in.
          <br />
          One that feels like magic.
        </h2>
        <div className="splitea-grid splitea-grid--three stagger">
          {modes.map(({
            step, title, icon, body, bullets, featured,
          }) => (
            <article
              key={title}
              className={`splitea-mode ${featured ? 'splitea-mode--featured' : ''}`}
            >
              <span className="splitea-mode__step">{step}</span>
              <span className="splitea-mode__icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <ul>
                {bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="splitea-tools">
          <span className="splitea-tool-pill">
            <strong>OCR</strong>
            AWS Textract
          </span>
          <span className="splitea-tool-pill">
            <strong>Voice</strong>
            AWS Transcribe
          </span>
          <span className="splitea-tool-pill">
            <strong>Reasoning</strong>
            AWS Bedrock
          </span>
          <span className="splitea-tool-pill">
            <strong>Async</strong>
            SQS jobs
          </span>
        </div>
      </div>
    </section>
  );
}

export default AddExpense;
