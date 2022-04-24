/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick/lib/slider';
import Image1 from '../../assets/images/portf-rym.png';
import Image2 from '../../assets/images/portf-calculator.png';
import Image3 from '../../assets/images/portf-voip.png';
import './portfolio.css';
import Project from './Project';

function Portfolio() {
  const settings = {
    slidesToShow: 2,
    infinite: true,
    speed: 1500,
    // autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 1,
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

  const repositories = [
    {
      title: 'Rick and Morty',
      img: Image1,
      description: 'Es un proyecto que nacio con la idea de poner a prueba mis conocimientos en JavaScript, React, Redux, Firebase, Tailwind y Git. Se utilizo la metodologia Kanban  ',
      repositoryLink: 'https://github.com/EnzoColinecul/rick-and-morty-app',
      demo: 'https://enzocolinecul.github.io/rick-and-morty-app/',
    },
    {
      title: 'Calculator',
      img: Image2,
      repositoryLink: 'https://github.com/EnzoColinecul/calculator',
      description: 'Calculadora realizada en React-Native y Typescript',
    },
    {
      title: 'VoIP App',
      img: Image3,
      repositoryLink: 'https://github.com/EnzoColinecul/Voip-react',
      description: 'Proyecto de tesis para la carrera de telecomunicaciones, una aplicacion multiplataforma el servidor de comun esta alojado en una instancia EC2 de AWS',
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Slider className="portfolio__container" {...settings}>
        {repositories.map(({
          title, img, repositoryLink, description, demo,
        }) => (
          <Project
            description={description}
            title={title}
            img={img}
            repositoryLink={repositoryLink}
            demo={demo}
          />
        ))}
      </Slider>
    </section>
  );
}

export default Portfolio;
