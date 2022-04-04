/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiRedux, SiFirebase } from 'react-icons/si';
import Slider from 'react-slick/lib/slider';
import Card from './Card';

import './experience.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Experience() {
  const settings = {
    slidesToShow: 3,
    infinite: true,
    speed: 1500,
    autoplay: true,
    arrows: false,
  };

  return (
    <section id="experience">
      <h5>What Skill  I Have</h5>
      <h2>My Experience</h2>
      <Slider className="experience__container" {...settings}>
        <Card iconName={<FaNodeJs className="experience__card-img" />} technologyName="Node JS" />
        <Card iconName={<SiRedux className="experience__card-img" />} technologyName="Redux" />
        <Card iconName={<FaReact className="experience__card-img" />} technologyName="React" />
        <Card iconName={<SiFirebase className="experience__card-img" />} technologyName="Firebase" />
      </Slider>
    </section>
  );
}

export default Experience;
