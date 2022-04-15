import React from 'react';
import { HiBadgeCheck } from 'react-icons/hi';

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
              <HiBadgeCheck className="service__icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <HiBadgeCheck className="service__icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <HiBadgeCheck className="service__icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <HiBadgeCheck className="service__icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <HiBadgeCheck className="service__icon" />
              <p>lorem ipsum</p>
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
              <HiBadgeCheck className="service__icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <HiBadgeCheck className="service__icon" />
              <p>lorem ipsum</p>
            </li>
            <li>
              <HiBadgeCheck className="service__icon" />
              <p>lorem ipsum</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
