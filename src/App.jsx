import { Toaster } from 'react-hot-toast';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Timeline from './components/timeline/Timeline';
import Skills from './components/skills/Skills';
import Certifications from './components/certifications/Certifications';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

import './index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <Toaster position="top-center" />
      <Header />
      <Nav />
      <About />
      <Timeline />
      <Skills />
      <Certifications />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
