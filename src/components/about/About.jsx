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
            {/* Un apasionado por la tecnología, tengo 24 años y vivo en Esquel - Chubut;
            <br />
            Me recibi en Técnico Superior en Sistemas de Telecomunicaciones.
            <br />
            Actualmente me desarrollo en el área de Seguridad informática,
            <br />
            en el equipo de IAM ( Identity and Access Managment ).
            <br />
            Me gustan mucho los desafíos y cumplir objetivos.
            <br />
            Tengo un nivel internmedio de Ingles oral y escrito.
            <br />
            Aprendo rápido, me encanta trabajar en equipo y me adapto rápido a los cambios.
            Tengo conocimientos en:
            <br />
            Sistemas / Networking / Telefonia IP / Seguridad Informatica/ Programacion */}
            Passionate about technology, I am 24 years old and I live in Esquel - Chubut.
            <br />
            I graduated in Superior Technician in Telecommunications Systems.
            <br />
            Currently my position is in the Computer Security area,
            <br />
            in the IAM (Identity and Access Management) team.
            I really like challenges and meeting goals.
            <br />
            I have an intermediate level of oral and written English.
            <br />
            I learn quickly, I love to work in a team and I adapt quickly to changes.
            <br />
            I have knowledge in:
            <br />
            Systems / Networking / IP Telephony / Computer Security / Programming
          </p>
          {/* <a href="#contact" className="btn btn-primary">Contact Me</a> */}
        </div>
      </div>
    </section>
  );
}

export default About;
