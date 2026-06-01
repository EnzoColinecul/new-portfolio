import { useEffect } from 'react';
import Cover from './sections/Cover';
import Brief from './sections/Brief';
import Services from './sections/Services';
import Design from './sections/Design';
import Results from './sections/Results';
import Closing from './sections/Closing';
import './crystal.css';

function CrystalCarpetProject() {
  useEffect(() => {
    document.title = 'Crystal Carpet Clean — Spotless every time';
  }, []);

  return (
    <main className="crystal">
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
