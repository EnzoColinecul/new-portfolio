import Cover from './sections/Cover';
import Brief from './sections/Brief';
import Services from './sections/Services';
import Design from './sections/Design';
import Results from './sections/Results';
import Closing from './sections/Closing';
import './crystal.css';
import usePageMetadata from '../../hooks/usePageMetadata';

function CrystalCarpetProject() {
  usePageMetadata('Crystal Carpet Clean — Spotless every time', '#F6F9FC', 'light');

  return (
    <main id="main-content" className="crystal" tabIndex="-1">
      <Cover />
      <Brief />
      <Services />
      <Design />
      <Results />
      <Closing />
    </main>
  );
}

export default CrystalCarpetProject;
