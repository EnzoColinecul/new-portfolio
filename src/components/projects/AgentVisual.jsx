const steps = [
  ['01', 'Input', 'Location · radius · role'],
  ['02', 'Discover', 'Google Places → nearby businesses'],
  ['03', 'Agent loop', 'Careers page → job boards → contact'],
  ['04', 'Judge', 'LLM-as-judge · confidence gate'],
  ['05', 'Report', 'Ranked opportunities (JSON)'],
];

function AgentVisual() {
  return (
    <div className="agent-visual" aria-hidden="true">
      <p className="agent-visual__head mono">
        <span>agent.run()</span>
        <span>budget-capped</span>
      </p>
      <ol className="agent-visual__steps">
        {steps.map(([n, title, detail]) => (
          <li key={n}>
            <span className="agent-visual__n mono">{n}</span>
            <span className="agent-visual__title">{title}</span>
            <span className="agent-visual__detail mono">{detail}</span>
          </li>
        ))}
      </ol>
      <p className="agent-visual__foot mono">
        <span>eval 14/14</span>
        <span>links 20/20</span>
      </p>
    </div>
  );
}

export default AgentVisual;
