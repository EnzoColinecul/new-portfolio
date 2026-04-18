
import { FaCheck } from 'react-icons/fa';

import './services.css';

function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Cloud Security & IAM</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__icon" />
              <p>Multi-Cloud IAM (AWS, GCP, Azure)</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>IAM Policy Design & Implementation</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Security Automation & Workflows</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Access Management Automation</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Security Audits & Compliance</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Temporary Credential Delivery Systems</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Backend Development & APIs</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__icon" />
              <p>RESTful API Development</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Python (FastAPI, Flask)</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Node.js Backend Services</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Cloud Services Integration (Lambda, DynamoDB, BigQuery)</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Database Design & Management</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>API Gateway Configuration</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Infrastructure & DevOps</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__icon" />
              <p>Infrastructure as Code (Terraform)</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Containerization (Docker)</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>CI/CD Pipelines (GitHub Actions)</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Cloud Infrastructure Management</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Multi-Account AWS Solutions</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Serverless Architecture</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
