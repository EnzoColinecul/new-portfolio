/* eslint-disable react/jsx-props-no-spreading */

import Slider from 'react-slick/lib/slider';
import { useEffect, useRef, useState } from 'react';
import ImageCrystal from '../../assets/images/crystal-logo-ai.png';
import ImageMafia from '../../assets/images/mafia.png';
import Image5 from '../../assets/images/portf-kimchallenge.png';
import Image1 from '../../assets/images/portf-rym.png';
import Image3 from '../../assets/images/portf-voip.png';
import ImageSplitea from '../../assets/images/splitea.png';
import './portfolio.css';
import Project from './Project';

const repositories = [
  {
    title: 'Crystal Carpet Clean',
    img: ImageCrystal,
    width: 1254,
    height: 1254,
    description: 'Conversion-focused website for a professional carpet and upholstery cleaning business in Auckland, NZ. Built to earn trust and turn visitors into bookings.',
    online: 'https://www.crystalcarpetclean.co.nz/',
  },
  {
    title: 'Splitea',
    img: ImageSplitea,
    width: 945,
    height: 2048,
    description: 'React Native + Python FastAPI application for expense sharing and management. Features Docker containerization, Alembic database migrations, and follows best practices with Flake8 linting.',
    caseStudy: '/splitea-project',
  },
  {
    title: 'Mafia Game (Frontend)',
    img: ImageMafia,
    width: 800,
    height: 1472,
    description: 'Mafia is a modern, real-time implementation of the classic social mystery party game. Play with friends online, manage roles, and survive the night!',
    repositoryLink: 'https://github.com/EnzoColinecul/mafia-game/tree/master',
  },
  {
    title: 'Mafia Game (Backend)',
    img: ImageMafia,
    width: 800,
    height: 1472,
    description: 'Backend for the Mafia Game, standalone Node.js + Socket.IO backend for authoritative Mafia game state backed by Redis.',
    repositoryLink: 'https://github.com/EnzoColinecul/mafia-game-server',
  },
  {
    title: 'Rick and Morty',
    img: Image1,
    width: 900,
    height: 1238,
    description: 'A project built to test JavaScript, React, Redux, Firebase, Tailwind, and Git knowledge using the Kanban methodology.',
    repositoryLink: 'https://github.com/EnzoColinecul/rick-and-morty-app',
    demo: 'https://enzocolinecul.github.io/rick-and-morty-app/',
  },
  {
    title: 'Country Search',
    img: Image5,
    width: 750,
    height: 1330,
    description: 'A web project built for a challenge using GraphQL and Apollo Client.',
    repositoryLink: 'https://github.com/EnzoColinecul/kimchechallenge',
    demo: 'https://enzocolinecul.github.io/kimchechallenge/',
  },
  {
    title: 'VoIP App',
    img: Image3,
    width: 900,
    height: 1026,
    repositoryLink: 'https://github.com/EnzoColinecul/Voip-react',
    description: 'Thesis project for telecommunications, with a multiplatform application and communications server hosted on AWS EC2.',
  },
];

function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(() => (
    typeof window !== 'undefined' && window.innerWidth >= 1140 ? 2 : 1
  ));

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1140px)');
    const update = (event) => setSlidesToShow(event.matches ? 2 : 1);
    setSlidesToShow(mediaQuery.matches ? 2 : 1);
    if (mediaQuery.addEventListener) mediaQuery.addEventListener('change', update);
    else mediaQuery.addListener(update);
    return () => {
      if (mediaQuery.removeEventListener) mediaQuery.removeEventListener('change', update);
      else mediaQuery.removeListener(update);
    };
  }, []);

  return slidesToShow;
}

function Portfolio() {
  const sliderRef = useRef(null);
  const slidesToShow = useSlidesToShow();
  const [currentSlide, setCurrentSlide] = useState(0);
  const maxStart = Math.max(0, repositories.length - slidesToShow);
  const safeCurrentSlide = Math.min(currentSlide, maxStart);

  useEffect(() => {
    if (currentSlide > maxStart) {
      setCurrentSlide(maxStart);
      sliderRef.current?.slickGoTo(maxStart);
    }
  }, [currentSlide, maxStart]);

  const settings = {
    slidesToShow,
    infinite: false,
    speed: 450,
    arrows: false,
    accessibility: true,
    afterChange: setCurrentSlide,
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      sliderRef.current?.slickPrev();
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      sliderRef.current?.slickNext();
    }
  };

  const visibleEnd = Math.min(safeCurrentSlide + slidesToShow, repositories.length);

  return (
    <section id="portfolio">
      <p className="section-eyebrow">My Projects</p>
      <h2>Portfolio</h2>
      {/* The carousel region is intentionally focusable for arrow-key navigation. */}
      {/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */}
      {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
      <div
        className="portfolio__carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Project portfolio"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <Slider
          ref={sliderRef}
          className="portfolio__container"
          onKeyDown={handleKeyDown}
          tabIndex={0}
          {...settings}
        >
          {repositories.map(({
            title, img, width, height, repositoryLink, description, demo, caseStudy, online,
          }, index) => (
            <Project
              key={title}
              description={description}
              title={title}
              img={img}
              repositoryLink={repositoryLink}
              demo={demo}
              caseStudy={caseStudy}
              online={online}
              width={width}
              height={height}
              isVisible={index >= safeCurrentSlide && index < visibleEnd}
            />
          ))}
        </Slider>
        <div className="portfolio__controls">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => sliderRef.current?.slickPrev()}
            disabled={safeCurrentSlide === 0}
            aria-label="Previous projects"
          >
            Previous
          </button>
          <div className="portfolio__dots" role="group" aria-label="Project pages">
            {Array.from({ length: maxStart + 1 }, (_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => sliderRef.current?.slickGoTo(index)}
                aria-label={`Show projects ${index + 1} to ${Math.min(index + slidesToShow, repositories.length)}`}
                aria-current={safeCurrentSlide === index ? 'page' : undefined}
              >
                <span className="portfolio__dot" aria-hidden="true" />
              </button>
            ))}
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => sliderRef.current?.slickNext()}
            disabled={safeCurrentSlide === maxStart}
            aria-label="Next projects"
          >
            Next
          </button>
        </div>
        <p className="portfolio__status" aria-live="polite">
          Showing Projects
          {' '}
          {safeCurrentSlide + 1}
          –
          {visibleEnd}
          {' of '}
          {repositories.length}
        </p>
      </div>
      {/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */}
      {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
    </section>
  );
}

export default Portfolio;
