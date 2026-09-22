import Header from '../components/header/Header';
import Nav from '../components/nav/Nav';
import About from '../components/about/About';
import Timeline from '../components/timeline/Timeline';
import Skills from '../components/skills/Skills';
import Certifications from '../components/certifications/Certifications';
import Services from '../components/services/Services';
import PortfolioSection from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';
import usePageMetadata from '../hooks/usePageMetadata';

function Portfolio() {
  usePageMetadata('Enzo Colinecul — Cybersecurity & AI Engineer', '#1b0e0e', 'dark');

  return (
    <main id="main-content" tabIndex="-1">
      <Header />
      <Nav />
      <About />
      <Timeline />
      <Skills />
      <Certifications />
      <Services />
      <PortfolioSection />
      <Contact />
      <Footer />
    </main>
  );
}

export default Portfolio;
