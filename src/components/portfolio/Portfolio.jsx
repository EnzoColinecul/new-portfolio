/* eslint-disable react/jsx-props-no-spreading */

import Slider from 'react-slick/lib/slider';
import Image5 from '../../assets/images/portf-kimchallenge.png';
import Image4 from '../../assets/images/portf-realstate.png';
import Image1 from '../../assets/images/portf-rym.png';
import Image3 from '../../assets/images/portf-voip.png';
import ImageSplitea from '../../assets/images/splitea.png';
import ImageMafia from '../../assets/images/mafia.png';
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
      title: 'Splitea',
      img: ImageSplitea, // Placeholder - you may want to add a specific image
      description: 'React Native + Python FastAPI application for expense sharing and management. Features Docker containerization, Alembic database migrations, and follows best practices with Flake8 linting.',
    },
    {
      title: 'Mafia Game (Frontend)',
      img: ImageMafia, // Placeholder - you may want to add a specific image
      description: 'Mafia is a modern, real-time implementation of the classic social mystery party game. Play with friends online, manage roles, and survive the night!',
      repositoryLink: 'https://github.com/EnzoColinecul/mafia-game/tree/master',
    },
    {
      title: 'Mafia Game (Backend)',
      img: ImageMafia, // Placeholder - you may want to add a specific image
      description: 'Backend for the Mafia Game, standalone Node.js + Socket.IO backend for authoritative Mafia game state backed by Redis.',
      repositoryLink: 'https://github.com/EnzoColinecul/mafia-game-server',
    },
    {
      title: 'Rick and Morty',
      img: Image1,
      description: 'It is a project that was born with the idea of ​​testing my knowledge in JavaScript, React, Redux, Firebase, Tailwind and Git. The Kanban methodology was used.',
      repositoryLink: 'https://github.com/EnzoColinecul/rick-and-morty-app',
      demo: 'https://enzocolinecul.github.io/rick-and-morty-app/',
    },
    {
      title: 'Country Search',
      img: Image5,
      description: 'Web developed for a challenge, first time using graphql and apollo client.',
      repositoryLink: 'https://github.com/EnzoColinecul/kimchechallenge',
      demo: 'https://enzocolinecul.github.io/kimchechallenge/',
    },
    {
      title: 'VoIP App',
      img: Image3,
      repositoryLink: 'https://github.com/EnzoColinecul/Voip-react',
      description: 'Thesis project for the telecommunications career, a multiplatform application, the communications server is hosted on an AWS EC2 instance.',
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Personal Projects</h5>
      <h2>Portfolio</h2>
      <Slider className="portfolio__container" {...settings}>
        {repositories.map(({
          title, img, repositoryLink, description, demo,
        }) => (
          <Project
            key={title}
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
