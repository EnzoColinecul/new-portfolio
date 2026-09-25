# Enzo Colinecul — Portfolio

Personal portfolio website built with React, showcasing my experience as a Software Engineer specializing in AI/LLM workflows, cloud infrastructure, and cybersecurity.

**Live:** [enzocolinecul.github.io/new-portfolio](https://enzocolinecul.github.io/new-portfolio)

## Sections

- **Nav** — Sticky top bar with section links and CV download
- **Hero** — Name, role, value proposition, key results
- **About** — Summary and quick facts
- **Experience** — Roles with achievement bullets and tools
- **Projects** — Featured projects (with case studies) and smaller projects
- **Skills** — Grouped tools and technologies
- **Credentials** — Certifications and education
- **Contact** — Contact channels and form (via EmailJS)

All content lives in `src/data/profile.js` — edit that file to update text.

## Tech Stack

- **React** 17 (Create React App)
- **react-icons** — Icon library
- **react-hot-toast** — Toast notifications
- **@emailjs/browser** — Client-side email sending
- **gh-pages** — GitHub Pages deployment

## Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

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
