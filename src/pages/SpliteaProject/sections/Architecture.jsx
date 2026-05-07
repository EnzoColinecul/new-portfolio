import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

function Architecture() {
  const [ref, isInView] = useInView(0.25);

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-arch ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <Brand section="Architecture" />
      <div className="splitea-section__inner">
        <p className="splitea-eyebrow">Architecture</p>
        <h2 className="splitea-headline">
          From phone to ledger to AI,
          <br />
          in one round trip.
        </h2>
        <div className="splitea-arch__diagram stagger">
          <div className="splitea-arch__node">
            <span className="splitea-arch__title">Client</span>
            <span className="splitea-arch__sub">iOS &amp; Android</span>
            <span className="splitea-arch__chip">Single codebase — Expo</span>
          </div>
          <div className="splitea-arch__arrow" aria-hidden="true">→</div>
          <div className="splitea-arch__node">
            <span className="splitea-arch__title">API</span>
            <span className="splitea-arch__sub">FastAPI</span>
            <span className="splitea-arch__chip">JWT auth</span>
            <span className="splitea-arch__chip">Pydantic schemas</span>
          </div>
          <div className="splitea-arch__arrow" aria-hidden="true">→</div>
          <div className="splitea-arch__column">
            <div className="splitea-arch__node">
              <span className="splitea-arch__title">Data</span>
              <span className="splitea-arch__sub">MySQL · S3</span>
              <span className="splitea-arch__chip">Users · Groups · Expenses</span>
              <span className="splitea-arch__chip">Splits · Settlements · Wallets</span>
            </div>
            <div className="splitea-arch__node">
              <span className="splitea-arch__title">AI</span>
              <span className="splitea-arch__sub">Async via SQS</span>
              <span className="splitea-arch__chip">Textract · Transcribe · Bedrock</span>
            </div>
            <div className="splitea-arch__node">
              <span className="splitea-arch__title">Infra</span>
              <span className="splitea-arch__sub">Docker · ECS · ALB</span>
              <span className="splitea-arch__chip">Terraform IaC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Architecture;
