/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiRedux, SiFirebase, SiMongodb, SiIonic,
} from 'react-icons/si';
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="experience">
      <h5>What Skill  I Have</h5>
      <h2>My Experience</h2>
      <Slider className="experience__container" {...settings}>
        <Card iconName={<FaNodeJs className="experience__card-img" />} technologyName="Node JS" proyects="Internal App (Naranja x), pepe" />
        <Card iconName={<SiRedux className="experience__card-img" />} technologyName="Redux" />
        <Card iconName={<FaReact className="experience__card-img" />} technologyName="React" proyects="This Portfolio, VoIP App, Rick and Morty App" />
        <Card iconName={<SiFirebase className="experience__card-img" />} technologyName="Firebase" />
        <Card iconName={<SiMongodb className="experience__card-img" />} technologyName="MongoDB" />
        <Card iconName={<SiIonic className="experience__card-img" />} technologyName="Ionic" />
      </Slider>
    </section>
  );
}

export default Experience;
