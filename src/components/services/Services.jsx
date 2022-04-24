import React from 'react';
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
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__icon" />
              <p>Responsive Webs</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Global and Immutable State</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Scalable Data Architecture</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>API RESTful</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Middleware Implementation</p>
            </li>
          </ul>
        </article>
        {/* Cybersecurity */}
        <article className="service">
          <div className="service__head">
            <h3>Cybersecurity - IAM </h3>
          </div>
          <ul className="service__list">
            <li>
              <FaCheck className="service__icon" />
              <p>Access Management on Cloud Platforms </p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Access Management on Premise</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Automated Reports</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Scripting in Powershell</p>
            </li>
            <li>
              <FaCheck className="service__icon" />
              <p>Registers, Deletions and Modifications of Users</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
