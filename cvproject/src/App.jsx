import './App.css'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom"
import { Container, Navbar, Nav } from 'react-bootstrap';
const Menu = () => {
//navbar for links
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">My Resume</Navbar.Brand>
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
          src="https://petlandcarmel.com/wp-content/uploads/2023/02/1628793_800-600x450.jpg"
          alt="Profile"
          className="profile-img"
        />
        <div className="textbox">
          <h2>Computer Engineering Bachelor Student</h2>
          <div
            className="own-text"
          ><p>Currently studying Computer Engineering in Turku on my third year</p>
            <p>I have a multifaceted experience in programming</p>
            <p>I enjoy problem solving</p></div>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Email: example@email.com</p>
            <p>Phone: 123-456-7890</p>
            {/* You can add more contact details here */}
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
              <td>{skill.name}</td>
              <td>{skill.description}</td>
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
      { name: 'Typescript', description: 'Used for university projects' },
      { name: 'C', description: 'Used for university projects in operating systems' },
    ],
    Intermediate: [
      { name: 'Python', description: 'Used for university projects in web development' },
      { name: 'REST API', description: 'Used in multiple projects' },
    ],
    Advanced: [
      { name: 'Javascript', description: 'Used for most of my web development projects' },
      { name: 'React.js', description: 'Primary framework in most web development projects ' },
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
  const education = 'Your education details here';
  const hobbies = ['Working out', 'Playing the guitar', 'Playing video games'];
  const languages = ['Swedish - First language', 'Finnish - Second language', 'English - Proficient', 'German - Basics'];
  const positionsOfTrust = ['Worked as a tutor at Åbo Akademi University for new Computer Engineering students'
  ];

  return (
    <div className="other-content">
      <h2>Other Information</h2>
      <div className="section">
        <h3>Education</h3>
        <p>{education}</p>
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
      title: 'Factory Worker Trainee',
      company: 'Nordic Lights',
      location: 'Pietarsaari',
      date: 'Summer 2022, Summer 2023',
      responsibilities: ['Assembling LED work lights', 'Testing LED work lights using software', 'Packing LED work lights'],
    },
    {
      id: 2,
      title: 'Factory Worker Trainee',
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
          <p>{experience.company}</p>
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
