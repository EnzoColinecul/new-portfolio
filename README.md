# Enzo Colinecul — Portfolio

Personal portfolio website built with React, showcasing my experience as a Software Engineer specializing in AI/LLM workflows, cloud infrastructure, and cybersecurity.

**Live:** [enzocolinecul.github.io/new-portfolio](https://enzocolinecul.github.io/new-portfolio)

## Sections

- **Header** — Hero intro with socials and CTA
- **About** — Background and summary
- **Timeline** — Professional experience
- **Skills** — Core technical skills (AI & LLMs, Backend, Databases, Infrastructure, Cloud, Methodologies)
- **Certifications** — AWS, Anthropic, and other credentials
- **Services** — What I offer
- **Portfolio** — Project showcase
- **Contact** — Contact form (via EmailJS)
- **Footer** — Links and credits

## Tech Stack

- **React** 17 (Create React App)
- **react-icons** — Icon library
- **react-slick** — Carousel/slider
- **react-hot-toast** — Toast notifications
- **@emailjs/browser** — Client-side email sending
- **gh-pages** — GitHub Pages deployment

## Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm start
```

Opens at [http://localhost:3000/new-portfolio](http://localhost:3000/new-portfolio).

## Deployment

Deployed to GitHub Pages via:

```bash
npm run deploy
```

This runs `npm run build` then publishes the `build/` folder to the `gh-pages` branch.

## Project Structure

```
src/
├── App.jsx              # Root component
├── index.js             # Entry point
├── index.css            # Global styles
├── assets/              # Images, PDF, CV
└── components/
    ├── about/           # About section
    ├── certifications/  # Certifications section
    ├── contact/         # Contact form
    ├── footer/          # Footer
    ├── header/          # Hero header + socials
    ├── nav/             # Navigation
    ├── portfolio/       # Project cards
    ├── services/        # Services offered
    ├── skills/          # Skills grid
    ├── testimonials/    # Testimonials
    └── timeline/        # Experience timeline
```
