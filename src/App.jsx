import './App.css'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap';
import myface from './assets/myface.jpeg'
const Menu = () => {
  //navbar for links
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
          <Nav.Link as={Link} to="/experience">Work Experience</Nav.Link>
          <Nav.Link as={Link} to="/other">Other</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

const HomePage = () => {
  return (
    <div className="homepage-content">
      <h1>Benjamin Heikkala</h1>
      <div className="profile-section">
        <img
          src={myface}
          alt="Profile"
          className="profile-img"
        />
        <div className="textbox">
          <h2>Computer Engineering Bachelor Student</h2>
          <div className="own-text">
            <p>22 years old living in Turku, Finland</p>
            <p>Studying Computer Engineering on my third year</p>
            <p>I have a multiple years of experience in programming</p>
            <p>I am a quick learner and enjoy problem solving</p>
            <p>Work easily both alone and in groups</p>
            </div>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <table className="table-dark table-striped">
              <tbody>
                <tr>
                  <th>Email</th>
                  <td>
                  <a href='mailto:benjaminheikkala@gmail.com'>benjaminheikkala@gmail.com</a>
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>
                    <a href='tel:+358458067333'>+358458067333</a>
                    </td>
                </tr>
                <tr>
                  <th>Github</th>
                  <td>
                    <a href="https://github.com/benjaaminh">https://github.com/benjaaminh</a>
                  </td>
                </tr>
                <tr>
                  <th>LinkedIn</th>
                  <td>
                    <a href="https://linkedin.com/in/benjamin-heikkala-5b90832a8">Link</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillTable = ({ skills, experienceLevel }) => {
  return (
    <div className="skill-table">
      <h3 className={experienceLevel}>{experienceLevel}</h3>
      <table>
        <tbody>
          {skills.map((skill) => (
            <tr key={skill.name}>
              <th className='skill-name'>{skill.name}</th>
              <td className='skill-description'>{skill.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SkillsPage = () => {
  const skillsByExperience = {//object of arrays
    Beginner: [
      { name: 'Typescript', description: 'Used for some university projects' },
      { name: 'Angular', description: 'Used for one project' },
      { name: 'C', description: 'Used for university projects in operating systems' },
      { name: 'GraphQL', description: 'Used in some university projects as an alternative to REST' },
      { name: 'Docker', description: 'Used for containerizing some projects' },
    ],
    Intermediate: [
      { name: 'REST API', description: 'Used in multiple projects' },
      { name: 'Django', description: 'Used as backend in some projects' },
      { name: 'MongoDB', description: 'Used as primary database technology in web development projects' },
      { name: 'SQL', description: 'Used in some university projects (Python SQLite API, mySQl, PostgreSQL)' },
      { name: 'Git', description: 'Git is used for all version control in my projects' },
      { name: 'Matlab', description: 'Used in systems- and control engineering and signal processing projects' },
      { name: 'Simulink', description: 'Used in systems- and control engineering and signal processing projects' },
      { name: 'Spring boot', description: 'Used in universiy projects' },
      { name: 'Linux', description: 'Used for operating systems and C programming projects' },
    ],
    Advanced: [
      { name: 'Python', description: 'Used for multiple university projects' },
      { name: 'Javascript', description: 'Used for most of my web development projects, also Jest.js and Cypress' },
      { name: 'React.js', description: 'Primary front-end library in most web development projects ' },
      { name: 'Node.js', description: 'Primary backend in most web development projects ' },
      { name: 'Java', description: 'Used in many university projects, also JUnit and JavaFX' },

    ],
  };

  return (
    <div className="skills-content">
      <h2>Skills</h2>
      {/* object.entries gives array of arrays of skills levels*/}
      {/* map the array using skills and level as arguments*/}
      {/* skills and level are key, value pairs for each skilltable object mapped*/}
      {/*tables are made separately by skill level, using skills as the content in each different table*/}
      {Object.entries(skillsByExperience).map(([level, skills]) => (
        <SkillTable key={level} skills={skills} experienceLevel={level} />
      ))}
    </div>
  );
};

const OtherPage = () => {
  const hobbies = ['Working out', 'Playing the guitar', 'Playing video games'];
  const languages = ['Swedish - First language', 'Finnish - Second language', 'English - Proficient', 'German - Basics'];
  const positionsOfTrust = ['Worked as a tutor at Åbo Akademi University for new Computer Engineering students'
  ];

  return (
    <div className="other-content">
      <h2>Other Information</h2>
      <div className="section">
        <h3>Education</h3>
        <div className='education-box'>{/*textbox has same properties as contact info box*/}
          <table className="table-dark table-striped">
            <tbody>
              <tr>
                <th>Åbo Akademi University</th>
                <td>Bachelor of Technology, Computer Engineering</td>
                <td>2021-</td>
              </tr>
              <tr>
                <th>Topeliusgymnasiet</th>
                <td>Upper Secondary School</td>
                <td>2017-2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="section">
        <h3>Hobbies</h3>
        <div className='left-aligned-list'>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section">
        <h3>Languages Spoken</h3>
        <div className='left-aligned-list'>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section">
        <h3>Positions of Trust</h3>
        <div className='left-aligned-list'>
          <ul>
            {positionsOfTrust.map((position, index) => (
              <li key={index}>{position}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const ExperiencePage = () => {
  const workExperiences = [
    {
      id: 1,
      title: 'Production Worker',
      company: 'Nordic Lights',
      location: 'Pietarsaari',
      date: 'Summer 2022, Summer 2023',
      responsibilities: ['Assembling LED work lights', 'Testing LED work lights using software', 'Packing LED work lights'],
    },
    {
      id: 2,
      title: 'Production Worker',
      company: 'Sirico Electronics',
      location: 'Pietarsaari',
      date: 'Aug 2021-Dec 2021',
      responsibilities: ['Testing PCBs for LED work lights using software', 'Packing PCBs for LED work lights'],
    },
  ];

  return (
    <div className="experience-content">
      <h2>Work Experience</h2>
      {workExperiences.map((experience) => (
        <div key={experience.id} className="job">
          <h3>{experience.title}</h3>
          <b style={{color:'#ffbf7f'}}>{experience.company}</b>
          <p>{experience.location}</p>
          <p>{experience.date}</p>
          <b>Tasks:</b>
          <ul>
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className='bg-dark text-light'>
      <h1>My resumé</h1>
      <Menu />
      <Container className="py-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
        </Routes>
      </Container>
    </div>
  )
}

export default App
