import './certifications.css';

function Certifications() {
  const certifications = [
    {
      title: 'AWS Certified AI Practitioner',
      issuer: 'Amazon Web Services (AWS)',
      link: 'https://www.credly.com/badges/c42c1837-fc0b-45bb-b2d5-8c8b45b09d06/linked_in_profile',
    },
    {
      title: 'Claude Code in Action',
      issuer: 'Anthropic',
      link: 'https://verify.skilljar.com/c/f2ppt73gz9pw',
    },
    {
      title: 'AWS Security Best Practices',
      issuer: 'Amazon Web Services (AWS)',
      link: 'https://drive.google.com/file/d/1hV5MwgZ8P0APTpvO49Kva094E81ixuiu/view',
    },
    {
      title: 'Full Stack Developer with Node.Js',
      issuer: 'EducacionIT',
      link: 'https://www.linkedin.com/in/enzo-colinecul/overlay/Certifications/1918380006/treasury/?profileId=ACoAAB_z3goBb9o8gwxIlBstI68rG2Anry8ZAwM',
    },
  ];

  return (
    <section id="certifications">
      <h5>Credentials</h5>
      <h2>My Certifications</h2>

      <div className="container certifications__container">
        {certifications.map((cert) => (
          <div className="cert__card" key={cert.title}>
            <h3>{cert.title}</h3>
            <h5 className="text-light">{cert.issuer}</h5>
            <div className="cert__card-cta">
              <a href={cert.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                View Credential
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
