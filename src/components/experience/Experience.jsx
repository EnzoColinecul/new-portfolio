import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiRedux, SiFirebase } from 'react-icons/si';
import Card from './Card';

import './experience.css';

function Experience() {
  return (
    <section id="experience">
      <h5>What Skill  I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <Card iconName={<FaNodeJs className="experience__card-img" />} technologyName="Node JS" />
        <Card iconName={<SiRedux className="experience__card-img" />} technologyName="Redux" />
        <Card iconName={<FaReact className="experience__card-img" />} technologyName="React" />
        <Card iconName={<SiFirebase className="experience__card-img" />} technologyName="Firebase" />
      </div>
    </section>
  );
}

export default Experience;
