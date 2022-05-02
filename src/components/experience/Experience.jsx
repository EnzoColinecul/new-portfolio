/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import {
  SiRedux, SiFirebase, SiMongodb, SiIonic,
} from 'react-icons/si';
import Slider from 'react-slick/lib/slider';
import Card from './Card';

import './experience.css';

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

  const cards = [
    {
      technologyName: 'React',
      iconName: <FaReact className="experience__card-img" />,
      proyects: ' This Portfolio, VoIP App, Rick and Morty App, Simple Calculator (React Native), Journal App, Realstate',
    },
    {
      technologyName: 'Node JS',
      iconName: <FaNodeJs className="experience__card-img" />,
      proyects: ' Internal App (Naranja x), Calendar (Backend)',
    },
    {
      technologyName: 'Redux',
      iconName: <SiRedux className="experience__card-img" />,
      proyects: ' VoIP App, Rick And Morty App, Journal App',
    },
    {
      technologyName: 'Firebase',
      iconName: <SiFirebase className="experience__card-img" />,
      proyects: ' Rick And Morty App, Journal App',
    },
    {
      iconName: <SiMongodb className="experience__card-img" />,
      technologyName: 'MongoDB',
      proyects: 'Internal App (Naranja x), Calendar (Backend)',
    },
    {
      iconName: <SiIonic className="experience__card-img" />,
      technologyName: 'Ionic',
      proyects: 'VoIP App',
    },
  ];

  return (
    <section id="experience">
      <h5>What Skill  I Have</h5>
      <h2>My Experience</h2>
      <Slider className="experience__container" {...settings}>
        {cards.map(({ iconName, technologyName, proyects }) => (
          <Card
            iconName={iconName}
            technologyName={technologyName}
            proyects={proyects}
          />
        ))}
      </Slider>
    </section>
  );
}

export default Experience;
