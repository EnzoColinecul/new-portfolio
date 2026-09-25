// Single source of truth for the portfolio content.
// Facts here mirror career-ops/cv.md and article-digest.md — update both together.

import BundledCV from '../assets/pdf/Enzo_Ariel_Colinecul_CV.pdf';
import ImageCrystal from '../assets/images/crystal-logo-ai.png';
import ImageMafia from '../assets/images/mafia.png';
import ImageSplitea from '../assets/images/splitea.png';

export const contact = {
  email: 'enzocolinecul1997@gmail.com',
  phoneDisplay: '+61 485 752 272',
  phoneHref: 'tel:+61485752272',
  whatsapp: 'https://wa.me/61485752272',
  linkedin: 'https://www.linkedin.com/in/enzo-colinecul/',
  github: 'https://github.com/EnzoColinecul/',
  location: 'Melbourne, VIC, Australia',
};

// ===== Résumé =====
// Paste the Google Drive file ID of your CV here (the long code in its share link:
// drive.google.com/file/d/<THIS_PART>/view). To update the CV later, use Drive's
// "Manage versions" → "Upload new version" on the same file so this ID never changes.
// While empty, the site falls back to the PDF bundled in src/assets/pdf.
export const CV_DRIVE_FILE_ID = '';

export const cv = CV_DRIVE_FILE_ID
  ? { href: `https://drive.google.com/uc?export=download&id=${CV_DRIVE_FILE_ID}`, target: '_blank', download: undefined }
  : { href: BundledCV, target: undefined, download: 'Enzo_Colinecul_CV.pdf' };

export const highlights = [
  { value: '4+', label: 'Years in security engineering at high-scale companies' },
  { value: '67%', label: 'Better response efficiency from my permission-review agent' },
  { value: '≈0%', label: 'Automation failure rate, down from 50%' },
  { value: '10k', label: 'Users migrated from Auth0 to Okta with zero errors' },
];

export const experience = [
  {
    company: 'Freelance',
    location: 'Web developer · New Zealand',
    roles: [{ title: 'Independent Web Developer', date: '2026 – Present' }],
    bullets: [
      'Design, build and ship websites end to end for local businesses: requirements, development, deployment and SEO.',
      'Latest: Crystal Carpet Clean, a conversion-focused, fully responsive site for an Auckland cleaning business.',
    ],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'SEO'],
  },
  {
    company: 'Hire a Techie',
    location: 'Auckland, NZ',
    roles: [{ title: 'IT Field Technician (Contractor)', date: 'Feb 2026 – Jun 2026' }],
    bullets: [
      'Delivered on-site IT deployments at veterinary clinics across Auckland, replacing end-of-life hardware and validating every system after installation.',
      'Kept clients informed throughout each visit and handled the handover of completed work.',
    ],
    tags: ['Hardware deployment', 'Systems testing', 'Client handover'],
  },
  {
    company: 'Mercado Libre',
    location: 'Argentina · 120k+ employees',
    roles: [
      { title: 'Cyber Security Engineer', date: 'Mar 2025 – Oct 2025' },
      { title: 'Cyber Security Developer', date: 'Sep 2022 – Mar 2025' },
    ],
    bullets: [
      'Designed and shipped an agentic workflow (Python + OpenAI API) that analyses cloud permission requests, flags critical actions and asks context-aware follow-up questions for human review. Cut failure rates from 50% to near zero: a 67% gain in response efficiency.',
      'Built the Cloud IAM agent of a multi-agent internal assistant on Slack and web portals: LangGraph routing over Amazon Bedrock Knowledge Bases, deciding at runtime whether to retrieve docs or call live AWS/GCP APIs.',
      'Fixed production hallucinations by constraining prompts to retrieved content and adding a graceful escalation to human support with full context.',
      'Led the Auth0 → Okta identity-provider migration across AWS Identity Center and OCI using SAML and SCIM: a zero-error rollout for ~10,000 users.',
      'Replaced permanent credentials with temporary, one-time-view secure links, and built cross-account AWS role management on CloudFormation, Lambda, S3 and EventBridge.',
      'Acted as a technical focal point: triaged cross-team requests, scoped solutions with stakeholders, mentored junior engineers and reviewed pull requests across repositories.',
    ],
    tags: ['Python', 'OpenAI API', 'LangGraph', 'Bedrock', 'Okta', 'SAML / SCIM', 'AWS', 'GCP'],
  },
  {
    company: 'Naranja X',
    location: 'Argentina',
    roles: [{ title: 'IAM Security Engineer Jr.', date: 'Jul 2021 – Sep 2022' }],
    bullets: [
      'Managed access control across on-premises and cloud environments.',
      'Ran audit documentation and security reviews.',
      'Built an internal IAM management tool end to end (React + Node.js).',
      'Gave cybersecurity talks to new employees.',
    ],
    tags: ['IAM', 'Audits', 'React', 'Node.js'],
  },
];

export const earlierRoles = [
  { title: 'Technical Support Help Desk', company: 'NET desarrollos', date: '2019 – 2020' },
  { title: 'Technical Support (Contract)', company: 'CIEFAP-UNPSJB', date: '2016 – 2017' },
];

export const featuredProjects = [
  {
    title: 'Find Me A Job AI',
    kind: 'Solo AI product · Worldwide beta',
    visual: 'agent',
    description: 'Pick a location, radius and role. Google Places finds nearby businesses, then an autonomous LLM agent investigates each one (careers page → job boards → contact email) and returns a ranked list of real opportunities.',
    points: [
      'Pluggable LLM layer (Amazon Bedrock / Gemini) with a triage → tool-loop → structured-report orchestrator, hard budgets and per-run cost accounting.',
      'LLM-as-judge quality gate and a golden eval set (14/14 accuracy, 20/20 links), enforced in code and failing closed.',
      'Serverless AWS via CDK: FastAPI on Lambda, Step Functions, DynamoDB single-table, Cognito PKCE; Next.js 15 frontend.',
    ],
    tags: ['Python', 'FastAPI', 'AWS CDK', 'Step Functions', 'Bedrock', 'Gemini', 'Next.js 15'],
    links: [],
  },
  {
    title: 'Splitea',
    kind: 'Product · Mobile app',
    img: ImageSplitea,
    width: 945,
    height: 2048,
    description: 'Shared-expense app with AI receipt workflows: Textract extracts line items, Transcribe parses voice instructions and Bedrock proposes the split.',
    points: [
      'FastAPI REST API (JWT auth, groups, settlements) and a React Native (Expo) app.',
      'AWS infrastructure in Terraform: VPC, ECS/ALB, RDS MySQL, S3, SQS, CloudWatch.',
    ],
    tags: ['FastAPI', 'React Native', 'Terraform', 'Bedrock', 'Textract'],
    links: [{ label: 'Read case study', to: '/splitea-project', internal: true }],
  },
  {
    title: 'Crystal Carpet Clean',
    kind: 'Client work · Website',
    img: ImageCrystal,
    width: 1254,
    height: 1254,
    description: 'Single-page marketing site for an Auckland carpet and upholstery cleaning business, built to turn visitors into bookings with prominent calls to action and review-based trust signals.',
    points: [],
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4'],
    links: [
      { label: 'Visit live site', href: 'https://www.crystalcarpetclean.co.nz/' },
      { label: 'Case study', to: '/crystal-carpet-project', internal: true },
    ],
  },
  {
    title: 'Mafia Game',
    kind: 'Side project · Real-time multiplayer',
    img: ImageMafia,
    width: 800,
    height: 1472,
    description: 'Online version of the classic social deduction party game, with a Next.js frontend and an authoritative Node.js + Socket.IO backend keeping game state in Redis.',
    points: [],
    tags: ['Next.js', 'Socket.IO', 'Redis', 'TypeScript'],
    links: [
      { label: 'Frontend code', href: 'https://github.com/EnzoColinecul/mafia-game/tree/master' },
      { label: 'Backend code', href: 'https://github.com/EnzoColinecul/mafia-game-server' },
    ],
  },
];

export const otherProjects = [
  {
    title: 'VoIP App',
    description: 'Telecommunications thesis: multiplatform calling app with a communications server hosted on AWS EC2.',
    tags: ['AWS EC2', 'VoIP', 'React'],
    links: [{ label: 'Code', href: 'https://github.com/EnzoColinecul/Voip-react' }],
  },
  {
    title: 'Rick and Morty Explorer',
    description: 'React, Redux and Firebase app built with a Kanban workflow.',
    tags: ['React', 'Redux', 'Firebase'],
    links: [
      { label: 'Demo', href: 'https://enzocolinecul.github.io/rick-and-morty-app/' },
      { label: 'Code', href: 'https://github.com/EnzoColinecul/rick-and-morty-app' },
    ],
  },
  {
    title: 'Country Search',
    description: 'Coding challenge built with GraphQL and Apollo Client.',
    tags: ['GraphQL', 'Apollo', 'React'],
    links: [
      { label: 'Demo', href: 'https://enzocolinecul.github.io/kimchechallenge/' },
      { label: 'Code', href: 'https://github.com/EnzoColinecul/kimchechallenge' },
    ],
  },
];

export const skills = [
  {
    title: 'AI & LLMs',
    items: ['Agentic workflows (LangGraph)', 'Multi-agent orchestration', 'RAG (Bedrock Knowledge Bases)', 'Tool calling & structured output', 'LLM evaluation (golden sets, LLM-as-judge)', 'LLM cost control & guardrails', 'OpenAI · Gemini · Bedrock'],
  },
  {
    title: 'Identity & Access',
    items: ['Okta · Auth0', 'SAML · SCIM', 'OAuth 2.0 / OIDC (PKCE)', 'AWS IAM & Identity Center', 'Cognito', 'Entra ID · Active Directory'],
  },
  {
    title: 'Cloud',
    items: ['AWS: Lambda, Step Functions, EventBridge, DynamoDB, ECS, Bedrock', 'GCP: Vertex AI, BigQuery, IAM', 'Azure: Entra ID', 'OCI: IAM'],
  },
  {
    title: 'Backend',
    items: ['Python 3.12', 'FastAPI · Flask', 'Node.js', 'Pydantic · pytest', 'DynamoDB · MySQL'],
  },
  {
    title: 'Frontend',
    items: ['TypeScript', 'Next.js · React', 'React Native (Expo)', 'Tailwind CSS', 'Accessible, responsive UI'],
  },
  {
    title: 'Infrastructure & DevOps',
    items: ['AWS CDK · Terraform', 'CloudFormation', 'Docker', 'GitHub Actions (OIDC to AWS)'],
  },
];

export const certifications = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Mar 2026',
    link: 'https://www.credly.com/badges/c42c1837-fc0b-45bb-b2d5-8c8b45b09d06/linked_in_profile',
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Jan 2026',
    link: 'https://verify.skilljar.com/c/f2ppt73gz9pw',
  },
  {
    title: 'AWS Security Best Practices',
    issuer: 'Amazon Web Services',
    date: 'Aug 2024',
    link: 'https://drive.google.com/file/d/1hV5MwgZ8P0APTpvO49Kva094E81ixuiu/view',
  },
  {
    title: 'Full Stack Developer with Node.js',
    issuer: 'EducacionIT',
    link: 'https://www.linkedin.com/in/enzo-colinecul/overlay/Certifications/1918380006/treasury/?profileId=ACoAAB_z3goBb9o8gwxIlBstI68rG2Anry8ZAwM',
  },
];

export const education = [
  { title: 'Telecommunications Technician', school: 'Instituto Superior Santo Domingo (ISSD)', date: '2017 – 2021' },
  { title: 'Computer Technician', school: 'Colegio Nº 713', date: '2010 – 2015' },
];

export const languages = ['Spanish (native)', 'English (B2, upper-intermediate)'];
