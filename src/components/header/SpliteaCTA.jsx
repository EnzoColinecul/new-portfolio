import './spliteaCTA.css';

function SpliteaCTA() {
  return (
    <div className="splitea-cta-wrapper">
      <a
        href="/new-portfolio/splitea-project"
        target="_blank"
        rel="noopener noreferrer"
        className="splitea-cta"
      >
        <span className="splitea-cta__ring" aria-hidden="true" />
        <span className="splitea-cta__inner">
          <svg
            className="splitea-cta__spark"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
              fill="currentColor"
            />
          </svg>
          <span>Check my last project!</span>
          <span className="splitea-cta__arrow" aria-hidden="true">→</span>
        </span>
      </a>
    </div>
  );
}

export default SpliteaCTA;
