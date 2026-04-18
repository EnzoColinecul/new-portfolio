
import './timeline.css';

function Timeline() {
  const experiences = [
    {
      title: 'Mercado Libre',
      role: 'Cyber Security Engineer',
      date: 'Mar 2025 - Oct 2025',
      desc: 'IAM technical representative for multi-cloud environments (AWS, GCP, Azure). Designed and maintained APIs and automations for cloud access management.',
    },
    {
      title: 'Mercado Libre',
      role: 'Cyber Security Developer',
      date: 'Sept 2022 - Mar 2025',
      desc: 'Access automation for IAM services on cloud platforms (AWS, GCP, AZURE) with Python. Integrated LLMs to analyze permission requests, improving efficiency by 67%.',
    },
    {
      title: 'Naranja X',
      role: 'IAM Security Jr. Engineer',
      date: 'July 2021 - Sept 2022',
      desc: 'Managed access control across on-premises and cloud environments. Developed an internal IAM management tool using React and Node.js.',
    },
    {
      title: 'NET desarrollos',
      role: 'Technical Support Help Desk',
      date: 'June 2019 - Sept 2020',
      desc: 'Provided essential technical support and managed help desk operations for internal systems.',
    },
    {
      title: 'CIEFAP-UNPSJB',
      role: 'Technical Support',
      date: 'Sept 2016 - Jan 2017',
      desc: 'Software/Hardware support, network administration, and system migration within research center environments.',
    },
  ];

  const education = [
    {
      title: 'Instituto Superior Santo Domingo (ISSD)',
      role: 'Telecommunications Technician',
      date: '2017 - 2021',
      desc: 'Superior degree focusing on networking and telecommunications.',
    },
    {
      title: 'Colegio Nº 713',
      role: 'Computer Technician',
      date: '2010 - 2015',
      desc: 'Technical high school education with computer systems focus.',
    },
  ];

  return (
    <section id="timeline">
      <h5>My Journey</h5>
      <h2>Education & Experience</h2>

      <div className="container timeline__container">
        {/* Education Section */}
        <div className="timeline__column">
          <h3 className="timeline__title">My Education</h3>
          <div className="timeline__box">
            {education.map((item) => (
              <div className="timeline__item" key={`${item.title}-${item.role}`}>
                <div className="timeline__dot" />
                <h4>{item.role}</h4>
                <p className="timeline__date">
                  <strong>{item.title}</strong>
                  {' | '}
                  {item.date}
                </p>
                <p className="timeline__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="timeline__column">
          <h3 className="timeline__title">My Experience</h3>
          <div className="timeline__box">
            {experiences.map((item) => (
              <div className="timeline__item" key={`${item.title}-${item.role}-${item.date}`}>
                <div className="timeline__dot" />
                <h4>{item.role}</h4>
                <p className="timeline__date">
                  <strong>{item.title}</strong>
                  {' | '}
                  {item.date}
                </p>
                <p className="timeline__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
