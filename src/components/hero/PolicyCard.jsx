import { useEffect, useRef, useState } from 'react';

import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

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

const lines = policy.split('\n');
const TOTAL = policy.length;
const START_DELAY = 500;
const TICK_MS = 22;
const CHARS_PER_TICK = 3;

const TOKEN = /("(?:[^"\\]|\\.)*")(\s*:)?|([{}[\],:])/g;

function highlight(line) {
  const parts = [];
  let last = 0;
  TOKEN.lastIndex = 0;
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
  return parts;
}

/* Types the policy out once, like it's being written live. */
function useTyped(enabled, start, runId) {
  const [count, setCount] = useState(enabled ? 0 : TOTAL);

  useEffect(() => {
    if (!enabled) {
      setCount(TOTAL);
      return undefined;
    }
    setCount(0);
    if (!start) return undefined;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCount((value) => {
          const next = Math.min(TOTAL, value + CHARS_PER_TICK);
          if (next >= TOTAL) clearInterval(interval);
          return next;
        });
      }, TICK_MS);
    }, START_DELAY);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [enabled, start, runId]);

  return count;
}

/* True once the element has scrolled into view (so phones see the typing too). */
function useSeen(ref) {
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (seen) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setSeen(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setSeen(true);
    }, { threshold: 0.35 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, seen]);
  return seen;
}

function PolicyCard() {
  const ref = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const seen = useSeen(ref);
  const [runId, setRunId] = useState(0);
  const count = useTyped(!prefersReducedMotion, seen, runId);
  const done = count >= TOTAL;

  // Work out which lines (and how much of the current one) are visible.
  let remaining = count;
  const visible = [];
  for (let i = 0; i < lines.length && remaining >= 0; i += 1) {
    const text = lines[i].slice(0, remaining);
    visible.push(text);
    remaining -= lines[i].length + 1;
    if (remaining < 0) break;
  }

  return (
    <figure ref={ref} className={`policy${done ? ' is-done' : ''}`}>
      <figcaption className="policy__bar mono">
        <span className="policy__file">enzo.policy.json</span>
        <span className={`policy__status${done ? ' is-allow' : ''}`}>
          <span className="policy__dot" aria-hidden="true" />
          {done ? 'Effect: Allow' : 'Evaluating…'}
        </span>
      </figcaption>
      <pre className="policy__code" aria-hidden="true">
        {lines.map((line, i) => {
          const shown = visible[i];
          const isCurrent = !done && i === visible.length - 1;
          return (
            // eslint-disable-next-line react/no-array-index-key
            <span className={`policy__line${shown === undefined ? ' is-pending' : ''}`} key={i}>
              <span className="policy__ln">{String(i + 1).padStart(2, '0')}</span>
              <code>{shown === undefined ? ' ' : highlight(shown)}</code>
              {isCurrent || (done && i === lines.length - 1) ? <span className="policy__caret" /> : null}
            </span>
          );
        })}
      </pre>
      <div className="policy__foot mono">
        <span>{done ? '✓ Validated · 0 errors' : `Writing… ${Math.round((count / TOTAL) * 100)}%`}</span>
        {!prefersReducedMotion && (
          <button type="button" className="policy__replay" onClick={() => setRunId((n) => n + 1)} disabled={!done}>
            ↻ Replay
          </button>
        )}
      </div>
      <p className="sr-only">
        A playful cloud access policy: allow your team to hire Enzo to ship AI agents to production,
        ground answers with retrieval, automate access and migrate identity providers with zero
        errors on AWS, GCP and Azure, based in Melbourne.
      </p>
    </figure>
  );
}

export default PolicyCard;
