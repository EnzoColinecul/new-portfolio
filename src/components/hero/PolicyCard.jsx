const policy = `{
  "Version": "2026-09",
  "Statement": [{
    "Sid": "HireEnzo",
    "Effect": "Allow",
    "Principal": { "Team": "your-team" },
    "Action": [
      "llm:ShipAgentsToProduction",
      "rag:GroundAnswers",
      "iam:AutomateAccess",
      "idp:MigrateWithZeroErrors"
    ],
    "Resource": ["aws:*", "gcp:*", "azure:*"],
    "Condition": {
      "StringEquals": { "location": "Melbourne, AU" }
    }
  }]
}`;

const TOKEN = /("(?:[^"\\]|\\.)*")(\s*:)?|([{}[\],:])/g;

function highlight(line) {
  const parts = [];
  let last = 0;
  let match = TOKEN.exec(line);
  while (match) {
    if (match.index > last) parts.push(line.slice(last, match.index));
    if (match[1]) {
      const cls = match[2] ? 'tok-key' : 'tok-str';
      parts.push(<span className={cls} key={`${match.index}s`}>{match[1]}</span>);
      if (match[2]) parts.push(<span className="tok-punct" key={`${match.index}c`}>{match[2]}</span>);
    } else {
      parts.push(<span className="tok-punct" key={`${match.index}p`}>{match[3]}</span>);
    }
    last = TOKEN.lastIndex;
    match = TOKEN.exec(line);
  }
  if (last < line.length) parts.push(line.slice(last));
  TOKEN.lastIndex = 0;
  return parts;
}

function PolicyCard() {
  const lines = policy.split('\n');
  return (
    <figure className="policy">
      <figcaption className="policy__bar mono">
        <span>enzo.policy.json</span>
        <span className="policy__status">
          <span className="policy__dot" aria-hidden="true" />
          Effect: Allow
        </span>
      </figcaption>
      <pre className="policy__code" aria-hidden="true">
        {lines.map((line, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <span className="policy__line" key={i}>
            <span className="policy__ln">{String(i + 1).padStart(2, '0')}</span>
            <code>{highlight(line)}</code>
            {i === lines.length - 1 ? <span className="policy__caret" /> : null}
          </span>
        ))}
      </pre>
      <p className="sr-only">
        A playful cloud access policy: allow your team to hire Enzo to ship AI agents to production,
        ground answers with retrieval, automate access and migrate identity providers with zero
        errors on AWS, GCP and Azure, based in Melbourne.
      </p>
    </figure>
  );
}

export default PolicyCard;
