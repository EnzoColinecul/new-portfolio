/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaNodeJs, FaReact, FaAws } from 'react-icons/fa';
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
        <Card
          iconName={<FaReact className="experience__card-img" />}
          technologyName="React"
          proyects=" This Portfolio, VoIP App, Rick and Morty App, Simple Calculator (React Native)"
        />
        <Card
          iconName={<FaNodeJs className="experience__card-img" />}
          technologyName="Node JS"
          proyects=" Internal App (Naranja x)"
        />
        <Card
          iconName={<SiRedux className="experience__card-img" />}
          technologyName="Redux"
          proyects=" VoIP App, Rick And Morty App"
        />
        <Card
          iconName={<SiFirebase className="experience__card-img" />}
          technologyName="Firebase"
          proyects=" Rick And Morty App"
        />
        <Card
          iconName={<SiMongodb className="experience__card-img" />}
          technologyName="MongoDB"
          proyects="Internal App (Naranja x)"
        />
        <Card
          iconName={<SiIonic className="experience__card-img" />}
          technologyName="Ionic"
          proyects="VoIP App"
        />
        <Card
          iconName={<FaAws className="experience__card-img" />}
        />
      </Slider>
    </section>
  );
}

export default Experience;
