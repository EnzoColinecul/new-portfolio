import Nav from '../components/nav/Nav';
import Hero from '../components/hero/Hero';
import About from '../components/about/About';
import Experience from '../components/experience/Experience';
import Projects from '../components/projects/Projects';
import Skills from '../components/skills/Skills';
import Credentials from '../components/credentials/Credentials';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import usePageMetadata from '../hooks/usePageMetadata';

function Portfolio() {
  usePageMetadata('Enzo Colinecul — Cybersecurity & AI Automation Engineer', '#0a0f1c', 'dark');

  return (
    <div className="home">
      <Nav />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Portfolio;
