import PropTypes from 'prop-types';
import {
  RiCloudLine,
  RiCpuLine,
  RiDatabase2Line,
  RiFlowChart,
  RiServerLine,
  RiTerminalLine,
} from 'react-icons/ri';
import './skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'AI & LLMs',
      icon: <RiCpuLine />,
      items: ['LLM APIs (OpenAI)', 'Agentic Workflows', 'RAG Pipelines', 'Claude Code'],
    },
    {
      title: 'Backend Development',
      icon: <RiServerLine />,
      items: ['Python', 'Flask', 'FastAPI'],
    },
    {
      title: 'Databases',
      icon: <RiDatabase2Line />,
      items: ['MySQL', 'DynamoDB', 'PostgreSQL'],
    },
    {
      title: 'Infrastructure & DevOps',
      icon: <RiTerminalLine />,
      items: ['Terraform', 'CloudFormation', 'Docker', 'GitHub Actions'],
    },
    {
      title: 'Cloud Services',
      icon: <RiCloudLine />,
      items: ['AWS (S3, Lambda, EventBridge, CloudFormation, API Gateway, IAM)', 'GCP (IAM, BigQuery)', 'Azure (Functions, Entra ID)', 'OCI (IAM, Object Storage)'],
    },
    {
      title: 'Methodologies',
      icon: <RiFlowChart />,
      items: ['Kanban', 'Scrum'],
    },
  ];

  return (
    <section id="skills">
      <p className="section-eyebrow">My Technical Arsenal for Building Modern Applications</p>
      <h2>Skills & Technologies</h2>

      <div className="container skills__container">
        {skillCategories.map((category) => (
          <div className="skill__card" key={category.title}>
            <div className="skill__header">
              <span className="skill__icon" aria-hidden="true">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>

            <ul className="skill__list" translate="no">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Skills;
