import React from 'react';

import ME from '../../assets/images/me2.jpeg';
import './about.css';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <p className="about__p">
            Me apasiona la tecnología, tengo 24 años y vivo en Esquel - Chubut;
            Técnico Superior en Sistemas de Telecomunicaciones.
            <br />
            Actualmente me desarrollo en el área de Seguridad informática,
            en el equipo de IAM ( Identity and Access Managment ).
            <br />
            Me gustan mucho los desafíos y cumplir objetivos.
            Tengo un nivel internmedio de Ingles oral y escrito.
            Aprendo rápido, me encanta trabajar en equipo y me adapto rápido a los cambios.
            Tengo conocimientos en:
            - Sistemas / Networking / Telefonia IP / Seguridad Informatica/ Programacion
          </p>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default About;
