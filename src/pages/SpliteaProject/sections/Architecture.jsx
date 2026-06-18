import { useEffect, useRef, useState } from 'react';
import {
  SiAmazonaws,
  SiAmazons3,
  SiExpo,
  SiFastapi,
  SiGit,
  SiGithubactions,
  SiMysql,
  SiStripe,
  SiTerraform,
} from 'react-icons/si';
import Brand from '../components/Brand';
import useInView from '../hooks/useInView';

const ICONS = {
  expo: { Cmp: SiExpo, color: '#0F1A2A' },
  aws: { Cmp: SiAmazonaws, color: '#FF9900' },
  fastapi: { Cmp: SiFastapi, color: '#009688' },
  mysql: { Cmp: SiMysql, color: '#4479A1' },
  s3: { Cmp: SiAmazons3, color: '#569A31' },
  stripe: { Cmp: SiStripe, color: '#635BFF' },
  git: { Cmp: SiGit, color: '#F05032' },
  ghactions: { Cmp: SiGithubactions, color: '#2088FF' },
  terraform: { Cmp: SiTerraform, color: '#7B42BC' },
};

const runtime = [
  {
    icon: 'expo',
    title: 'Mobile client',
    sub: 'Expo · React Native',
    desc: 'Native app that signs requests with a JWT kept in SecureStore.',
    chips: ['axios', 'SecureStore JWT'],
  },
  {
    icon: 'aws',
    title: 'ALB',
    sub: 'Application Load Balancer',
    desc: 'Single HTTPS entry point; health-checks and routes traffic to ECS.',
    chips: ['/api/health/'],
  },
  {
    icon: 'fastapi',
    title: 'ECS Fargate',
    sub: 'FastAPI · Uvicorn',
    desc: 'The backend hub — every service below is called from here.',
    chips: ['Routers /api/v1', 'Services', 'Integrations'],
  },
];

const services = [
  {
    icon: 'mysql',
    title: 'RDS MySQL',
    sub: 'Secrets Manager',
    desc: 'Relational store for users, groups and expenses; creds in Secrets Manager.',
    chips: ['Users · Groups · Expenses'],
  },
  {
    icon: 's3',
    title: 'S3',
    sub: 'Receipts',
    desc: 'Receipt images uploaded straight from the app via signed URLs.',
    chips: ['Signed uploads'],
  },
  {
    icon: 'aws',
    title: 'SQS · EventBridge',
    sub: 'Async pipelines',
    desc: 'Queues background jobs so OCR and payments run off the request path.',
    chips: ['Stripe Worker'],
  },
  {
    icon: 'stripe',
    title: 'Stripe Connect',
    sub: 'Settlement',
    desc: 'Real-money settle-up via destination charges; platform never holds funds.',
    chips: ['Destination charges'],
  },
  {
    icon: 'aws',
    title: 'AWS AI',
    sub: 'Receipt workflow',
    desc: 'Textract, Transcribe and Bedrock turn a receipt into a proposed split.',
    chips: ['Textract · Bedrock · Transcribe'],
  },
];

const delivery = [
  {
    icon: 'git',
    title: 'git push',
    sub: 'branch develop',
    desc: 'A push to develop triggers the whole delivery pipeline.',
    chips: ['Trigger'],
  },
  {
    icon: 'ghactions',
    title: 'GitHub Actions',
    sub: 'CI gates + build',
    desc: 'Runs format and secret-scan gates, then builds a SHA-tagged image.',
    chips: ['Black', 'Gitleaks', 'docker build (SHA)'],
  },
  {
    icon: 'aws',
    title: 'ECR',
    sub: 'Image registry',
    desc: 'Stores each immutable image tagged by git SHA for traceable rollbacks.',
    chips: ['git SHA + latest'],
  },
  {
    icon: 'terraform',
    title: 'terraform apply',
    sub: 'Infrastructure as Code',
    desc: 'Provisions the full AWS footprint from version-controlled modules.',
    chips: ['Networking', 'Database', 'Application Load Balancer', 'Elastic Container Service', 'S3'],
  },
  {
    icon: 'aws',
    title: 'AWS',
    sub: 'Provision + deploy',
    desc: 'New image rolls out to the ECS service with zero hand-clicks.',
    chips: ['Rolls ECS service'],
  },
];

const renderNode = (node, onOpen, compact) => {
  const { Cmp, color } = ICONS[node.icon];
  return (
    <button
      type="button"
      onClick={() => onOpen(node)}
      className={`splitea-arch__node ${compact ? 'splitea-arch__node--compact' : ''}`}
    >
      <span className="splitea-arch__head">
        <Cmp className="splitea-arch__logo" style={{ color }} aria-hidden="true" />
        <span className="splitea-arch__heading">
          <span className="splitea-arch__title">{node.title}</span>
          <span className="splitea-arch__sub">{node.sub}</span>
        </span>
        <span className="splitea-arch__more" aria-hidden="true">+</span>
      </span>
    </button>
  );
};

const renderFlow = (nodes, onOpen) => (
  <div className="splitea-arch__flow">
    {nodes.map((node, i) => (
      <div key={node.title} className="splitea-arch__flow-item">
        {i > 0 && <span className="splitea-arch__arrow" aria-hidden="true">→</span>}
        {renderNode(node, onOpen, false)}
      </div>
    ))}
  </div>
);

function Architecture() {
  const [ref, isInView] = useInView(0.25);
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);

  const onClose = () => setActive(null);

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setActive(null); };
    document.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [active]);

  const ActiveIcon = active ? ICONS[active.icon].Cmp : null;

  return (
    <section
      ref={ref}
      className={`splitea-section splitea-arch ${isInView ? 'splitea-section--visible' : ''}`}
    >
      <Brand section="Architecture" />
      <div className="splitea-section__inner">
        <div className="splitea-arch__board stagger">
          <div className="splitea-arch__lane">
            <span className="splitea-arch__lane-label">Runtime</span>
            <span className="splitea-arch__sublabel">Request path</span>
            {renderFlow(runtime, setActive)}
            <div className="splitea-arch__branch" aria-hidden="true">
              <span className="splitea-arch__branch-arrow">↓</span>
              <span className="splitea-arch__branch-label">ECS Fargate connects to</span>
            </div>
            <span className="splitea-arch__sublabel">Backend services &amp; integrations</span>
            <div className="splitea-arch__services">
              {services.map((node) => (
                <div key={node.title}>{renderNode(node, setActive, true)}</div>
              ))}
            </div>
          </div>

          <div className="splitea-arch__bridge" aria-hidden="true">
            <span className="splitea-arch__bridge-arrow">↑</span>
            <span className="splitea-arch__bridge-label">
              Terraform provisions · GitHub Actions deploys
            </span>
          </div>

          <div className="splitea-arch__lane">
            <span className="splitea-arch__lane-label">Delivery — CI/CD &amp; IaC</span>
            {renderFlow(delivery, setActive)}
          </div>
        </div>
      </div>

      {active && (
        <div className="splitea-arch__modal-overlay">
          <button
            type="button"
            className="splitea-arch__modal-backdrop"
            aria-label="Close"
            onClick={onClose}
          />
          <div
            className="splitea-arch__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="splitea-arch-modal-title"
          >
            <button
              type="button"
              ref={closeRef}
              className="splitea-arch__modal-close"
              onClick={onClose}
              aria-label="Close"
            >
              ×
            </button>
            <div className="splitea-arch__modal-head">
              <ActiveIcon
                className="splitea-arch__logo"
                style={{ color: ICONS[active.icon].color }}
                aria-hidden="true"
              />
              <span className="splitea-arch__heading">
                <span className="splitea-arch__title">{active.title}</span>
                <span className="splitea-arch__sub" id="splitea-arch-modal-title">{active.sub}</span>
              </span>
            </div>
            <p className="splitea-arch__modal-desc">{active.desc}</p>
            <div className="splitea-arch__modal-chips">
              {active.chips.map((chip) => (
                <span key={chip} className="splitea-arch__chip">{chip}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Architecture;
