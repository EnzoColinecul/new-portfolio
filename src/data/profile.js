// Single source of truth for the portfolio content.
// Update this file to change text across the site without touching layout code.

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

export const highlights = [
  { value: '4+', label: 'Years in security engineering at high-scale companies' },
  { value: '67%', label: 'Better response efficiency on permission reviews' },
  { value: '≈0%', label: 'Automation failure rate, down from 50%' },
  { value: '3', label: 'Clouds secured: AWS, GCP and Azure' },
];

export const experience = [
  {
    company: 'Hire a Techie',
    location: 'Auckland, NZ',
    roles: [
      {
        title: 'IT Deployments (Contractor)',
        date: 'Feb 2026 – Jun 2026',
      },
    ],
    bullets: [
      'Delivered on-site IT deployments for veterinary clinics across Auckland.',
      'Replaced end-of-life hardware and tested every system after installation.',
      'Handled client handover, walking clinic staff through their new setup.',
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
      'Designed and deployed an agentic LLM workflow that analyses internal cloud permission requests, flags critical actions and asks context-aware follow-up questions.',
      'Cut automation failure rates from 50% to near zero, a 67% improvement in response efficiency.',
      'IAM technical representative for AWS, GCP and Azure; designed and maintained the APIs and automations behind cloud access management.',
      'Replaced permanently visible credentials with temporary, one-time-view secure links.',
      'Built a cross-account role management solution on CloudFormation, Lambda, S3 and EventBridge.',
      'Reviewed pull requests and wrote API documentation for internal teams.',
    ],
    tags: ['Python', 'AWS', 'GCP', 'Azure', 'IAM', 'LLM agents', 'CloudFormation'],
  },
  {
    company: 'Naranja X',
    location: 'Argentina',
    roles: [{ title: 'IAM Security Engineer Jr.', date: 'Jul 2021 – Sep 2022' }],
    bullets: [
      'Managed access control across on-premises and cloud environments in line with security policy.',
      'Ran audit documentation and security reviews to keep IAM consistent.',
      'Built an internal IAM management tool end to end (React + Node.js).',
      'Gave cybersecurity awareness talks to new employees.',
    ],
    tags: ['IAM', 'Audits', 'React', 'Node.js'],
  },
];

export const earlierRoles = [
  { title: 'Technical Support Help Desk', company: 'NET desarrollos', date: '2019 – 2020' },
  { title: 'Technical Support', company: 'CIEFAP-UNPSJB', date: '2016 – 2017' },
];

export const featuredProjects = [
  {
    title: 'Splitea',
    kind: 'Product · Mobile app',
    img: ImageSplitea,
    width: 945,
    height: 2048,
    description: 'Expense-sharing app for groups. React Native client with a Python FastAPI backend, containerised with Docker and versioned with Alembic migrations.',
    tags: ['React Native', 'FastAPI', 'Docker', 'Alembic'],
    links: [{ label: 'Read case study', to: '/splitea-project', internal: true }],
  },
  {
    title: 'Crystal Carpet Clean',
    kind: 'Client work · Website',
    img: ImageCrystal,
    width: 1254,
    height: 1254,
    description: 'Conversion-focused website for a carpet and upholstery cleaning business in Auckland, built to earn trust and turn visitors into bookings.',
    tags: ['Web design', 'Conversion', 'Live client site'],
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
    description: 'Online version of the classic social deduction party game. A standalone Node.js + Socket.IO server keeps authoritative game state in Redis.',
    tags: ['Node.js', 'Socket.IO', 'Redis', 'Real-time'],
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
    tags: ['React', 'Redux', 'Firebase', 'Tailwind'],
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
    title: 'Security & IAM',
    items: ['Multi-cloud IAM', 'IAM policy design', 'Access automation', 'Temporary credentials', 'Security audits', 'Entra ID'],
  },
  {
    title: 'AI & LLMs',
    items: ['Agentic workflows', 'LLM APIs (OpenAI)', 'RAG pipelines', 'Claude Code'],
  },
  {
    title: 'Cloud',
    items: ['AWS (Lambda, S3, EventBridge, API Gateway, IAM)', 'GCP (IAM, BigQuery)', 'Azure (Functions, Entra ID)', 'OCI'],
  },
  {
    title: 'Backend',
    items: ['Python', 'FastAPI', 'Flask', 'Node.js', 'REST APIs'],
  },
  {
    title: 'Infrastructure & DevOps',
    items: ['Terraform', 'CloudFormation', 'Docker', 'GitHub Actions', 'Serverless'],
  },
  {
    title: 'Data & Ways of working',
    items: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Scrum', 'Kanban'],
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
