import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const steps = [
  {
    n: '01',
    title: 'Capture',
    icon: '📷',
    body: 'User snaps the receipt. Image goes straight to S3 via signed URL.',
  },
  {
    n: '02',
    title: 'Extract',
    icon: '📄',
    body: 'Textract pulls line items, totals, and tax into structured data.',
  },
  {
    n: '03',
    title: 'Listen',
    icon: '🎙',
    body: 'Voice or text intent, transcribed and normalized for the model.',
  },
  {
    n: '04',
    title: 'Reason',
    icon: '✶',
    featured: true,
    body: 'Bedrock combines items + intent and proposes a split per person.',
  },
  {
    n: '05',
    title: 'Confirm',
    icon: '✓',
    body: 'User reviews, edits, approves. Settlement ledger writes the entries.',
  },
];

const notes = ['Async via SQS', 'Idempotent jobs', 'Human-in-the-loop confirm', 'Receipts persisted, not just parsed'];

function AIWorkflow() {
  const [ref, isInView] = useInView(0.25);

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-workflow ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <Brand section="AI workflow" />
      <div className="splitea-section__inner">
        <p className="splitea-eyebrow">AI workflow</p>
        <h2 className="splitea-headline">
          Photo to fair split,
          <br />
          in five steps.
        </h2>
        <div className="splitea-flow stagger">
          {steps.map(({
            n, title, icon, body, featured,
          }) => (
            <div
              key={n}
              className={`splitea-flow__step ${featured ? 'splitea-flow__step--featured' : ''}`}
            >
              <span className="splitea-flow__num">{`Step ${n}`}</span>
              <span className="splitea-flow__icon" aria-hidden="true">{icon}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <div className="splitea-workflow__notes">
          {notes.map((note) => <span key={note}>{note}</span>)}
        </div>
      </div>
    </section>
  );
}

export default AIWorkflow;
