import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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
    id: 'mobile-client',
    icon: 'expo',
    title: 'Mobile client',
    sub: 'Expo · React Native',
    desc: 'Native app that signs requests with a JWT kept in SecureStore.',
    chips: ['axios', 'SecureStore JWT'],
  },
  {
    id: 'alb',
    icon: 'aws',
    title: 'ALB',
    sub: 'Application Load Balancer',
    desc: 'Single HTTPS entry point; health-checks and routes traffic to ECS.',
    chips: ['/api/health/'],
  },
  {
    id: 'ecs-fargate',
    icon: 'fastapi',
    title: 'ECS Fargate',
    sub: 'FastAPI · Uvicorn',
    desc: 'The backend hub — every service below is called from here.',
    chips: ['Routers /api/v1', 'Services', 'Integrations'],
  },
];

const services = [
  {
    id: 'rds-mysql',
    icon: 'mysql',
    title: 'RDS MySQL',
    sub: 'Secrets Manager',
    desc: 'Relational store for users, groups and expenses; creds in Secrets Manager.',
    chips: ['Users · Groups · Expenses'],
  },
  {
    id: 's3',
    icon: 's3',
    title: 'S3',
    sub: 'Receipts',
    desc: 'Receipt images uploaded straight from the app via signed URLs.',
    chips: ['Signed uploads'],
  },
  {
    id: 'sqs-eventbridge',
    icon: 'aws',
    title: 'SQS · EventBridge',
    sub: 'Async pipelines',
    desc: 'Queues background jobs so OCR and payments run off the request path.',
    chips: ['Stripe Worker'],
  },
  {
    id: 'stripe-connect',
    icon: 'stripe',
    title: 'Stripe Connect',
    sub: 'Settlement',
    desc: 'Real-money settle-up via destination charges; platform never holds funds.',
    chips: ['Destination charges'],
  },
  {
    id: 'aws-ai',
    icon: 'aws',
    title: 'AWS AI',
    sub: 'Receipt workflow',
    desc: 'Textract, Transcribe and Bedrock turn a receipt into a proposed split.',
    chips: ['Textract · Bedrock · Transcribe'],
  },
];

const delivery = [
  {
    id: 'git-push',
    icon: 'git',
    title: 'git push',
    sub: 'branch develop',
    desc: 'A push to develop triggers the whole delivery pipeline.',
    chips: ['Trigger'],
  },
  {
    id: 'github-actions',
    icon: 'ghactions',
    title: 'GitHub Actions',
    sub: 'CI gates + build',
    desc: 'Runs format and secret-scan gates, then builds a SHA-tagged image.',
    chips: ['Black', 'Gitleaks', 'docker build (SHA)'],
  },
  {
    id: 'ecr',
    icon: 'aws',
    title: 'ECR',
    sub: 'Image registry',
    desc: 'Stores each immutable image tagged by git SHA for traceable rollbacks.',
    chips: ['git SHA + latest'],
  },
  {
    id: 'terraform-apply',
    icon: 'terraform',
    title: 'terraform apply',
    sub: 'Infrastructure as Code',
    desc: 'Provisions the full AWS footprint from version-controlled modules.',
    chips: ['Networking', 'Database', 'Application Load Balancer', 'Elastic Container Service', 'S3'],
  },
  {
    id: 'aws-deploy',
    icon: 'aws',
    title: 'AWS',
    sub: 'Provision + deploy',
    desc: 'New image rolls out to the ECS service with zero hand-clicks.',
    chips: ['Rolls ECS service'],
  },
];

const ALL_NODES = [...runtime, ...services, ...delivery];

const renderNode = (node, onOpen, compact) => {
  const { Cmp, color } = ICONS[node.icon];
  return (
    <button
      type="button"
      onClick={(event) => onOpen(node, event)}
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
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeId, setActiveId] = useState(() => searchParams.get('arch'));
  const active = ALL_NODES.find((node) => node.id === activeId) || null;
  const closeRef = useRef(null);
  const dialogRef = useRef(null);
  const lastTriggerRef = useRef(null);

  const onClose = () => {
    setActiveId(null);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('arch');
    setSearchParams(nextParams, { replace: true });
  };

  const onOpen = (node, event) => {
    lastTriggerRef.current = event.currentTarget;
    setActiveId(node.id);
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set('arch', node.id);
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const queryId = searchParams.get('arch');
    const queryNode = ALL_NODES.find((node) => node.id === queryId);
    setActiveId(queryNode?.id || null);
    if (queryId && !queryNode) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('arch');
      setSearchParams(nextParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return undefined;

    if (active) {
      if (!dialog.open) dialog.showModal();
      closeRef.current?.focus();
    } else if (dialog.open) {
      dialog.close();
      lastTriggerRef.current?.focus();
    }
    return undefined;
  }, [active]);

  useEffect(() => () => {
    if (dialogRef.current?.open) dialogRef.current.close();
  }, []);

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
            {renderFlow(runtime, onOpen)}
            <div className="splitea-arch__branch" aria-hidden="true">
              <span className="splitea-arch__branch-arrow">↓</span>
              <span className="splitea-arch__branch-label">ECS Fargate connects to</span>
            </div>
            <span className="splitea-arch__sublabel">Backend services &amp; integrations</span>
            <div className="splitea-arch__services">
              {services.map((node) => (
                <div key={node.title}>{renderNode(node, onOpen, true)}</div>
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
            {renderFlow(delivery, onOpen)}
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="splitea-arch__modal-overlay"
        aria-labelledby="splitea-arch-modal-title"
        aria-describedby="splitea-arch-modal-desc"
        onCancel={(event) => {
          event.preventDefault();
          onClose();
        }}
      >
        {active && (
          <>
            <button
              type="button"
              className="splitea-arch__modal-backdrop"
              aria-label="Close architecture backdrop"
              onClick={onClose}
            />
            <div className="splitea-arch__modal">
              <button
                type="button"
                ref={closeRef}
                className="splitea-arch__modal-close"
                onClick={onClose}
                aria-label="Close architecture details"
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
                  <span className="splitea-arch__title" id="splitea-arch-modal-title">{active.title}</span>
                  <span className="splitea-arch__sub">{active.sub}</span>
                </span>
              </div>
              <p className="splitea-arch__modal-desc" id="splitea-arch-modal-desc">{active.desc}</p>
              <div className="splitea-arch__modal-chips">
                {active.chips.map((chip) => (
                  <span key={chip} className="splitea-arch__chip">{chip}</span>
                ))}
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}

export default Architecture;
