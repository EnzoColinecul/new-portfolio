import React from 'react';
import CV from '../../assets/pdf/Enzo_Colinecul_CV-may-2022.pdf';

function CTA() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Contact me</a>
    </div>
  );
}

export default CTA;
