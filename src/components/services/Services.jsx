
import { FaCheck } from 'react-icons/fa';

import './services.css';

function Services() {
  return (
    <section id="services">
      <p className="section-eyebrow">What I Offer</p>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Cloud Security & IAM</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Multi-Cloud IAM (AWS, GCP, Azure)</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>IAM Policy Design & Implementation</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Security Automation & Workflows</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Access Management Automation</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Security Audits & Compliance</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
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
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>RESTful API Development</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Python (FastAPI, Flask)</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Node.js Backend Services</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Cloud Services Integration (Lambda, DynamoDB, BigQuery)</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Database Design & Management</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
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
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Infrastructure as Code (Terraform)</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Containerization (Docker)</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>CI/CD Pipelines (GitHub Actions)</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Cloud Infrastructure Management</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Multi-Account AWS Solutions</p>
            </li>
            <li>
              <FaCheck className="service__icon" aria-hidden="true" />
              <p>Serverless Architecture</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
