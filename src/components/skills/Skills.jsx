import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import {
  RiCloudLine,
  RiCpuLine,
  RiDatabase2Line,
  RiFlowChart,
  RiServerLine,
  RiTerminalLine,
} from 'react-icons/ri';
import './skills.css';

function Counter({ targetValue, suffix }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    if (isVisible) {
      let start = 0;
      const duration = 500; // ms
      const increment = targetValue / (duration / 16);

      timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setCount(targetValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isVisible, targetValue]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

Counter.propTypes = {
  targetValue: PropTypes.number.isRequired,
  suffix: PropTypes.string.isRequired,
};

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
      <h5>My technical arsenal for building modern applications</h5>
      <h2>Skills & Technologies</h2>

      <div className="container skills__container">
        {skillCategories.map((category) => (
          <div className="skill__card" key={category.title}>
            <div className="skill__header">
              <span className="skill__icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>

            {category.value && (
              <p className="skills__years">
                <Counter targetValue={category.value} suffix={category.suffix} />
              </p>
            )}
            <ul className="skill__list">
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
