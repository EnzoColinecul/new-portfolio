/* eslint-disable max-len */
import ME from '../../assets/images/me-2-new.jpg';
import './about.css';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <p className="about__p">
            Cybersecurity & Software Engineer with over 4 years of experience in high-scale production environments
            {' '}
            including Mercado Libre (+120k employees).
            <br />
            <br />
            I am an AWS Certified AI Practitioner specializing in Agentic workflows, LLM API deployment, and RAG pipelines.
            <br />
            <br />
            My core expertise lies in translating complex technical requirements into scalable, autonomous AI solutions. I focus heavily on Identity and Access Management (IAM), access automation, and backend development.
            <br />
            <br />
            I really like challenges and meeting goals. I learn quickly, I love to work in a team
            {' '}
            and I adapt quickly to changes.
            <br />
            <br />
            Core technical skills:
            <br />
            AI & LLMs (OpenAI APIs, Agentic Routing, Claude Code) / Backend (Python, FastAPI, Flask, Node.js) / Cloud Services
            {' '}
            (AWS, GCP, Azure, Lambda, DynamoDB, API Gateway) / Infrastructure & DevOps (Terraform, Docker, GitHub Actions).
          </p>
          {/* <a href="#contact" className="btn btn-primary">Contact Me</a> */}
        </div>
      </div>
    </section>
  );
}

export default About;
