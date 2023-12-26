import './App.css'
import {
  Routes,
  Route,
  Link,
} from "react-router-dom"

const Menu = () => {
  const padding = {
    paddingRight: 10
  }
  return (
    <div>
      <Link style={padding} to="/">Home</Link>
      <Link style={padding} to="/skills">Skills</Link>
      <Link style={padding} to="/experience">Work experience</Link>
      <Link style={padding} to="/other">Other</Link>
    </div>
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
      {/* map the array using skills and description as arguments*/}
      {/* level and description are key, value pairs for each skilltable object mapped*/}

      {Object.entries(skillsByExperience).map(([description, skills]) => (
        <SkillTable key={description} skills={skills} experienceLevel={description} />
      ))}
    </div>
  );
};

const OtherPage = () => {
  const education = 'Your education details here';
  const hobbies = ['Gym', 'Guitar', 'Video games'];
  const languages = ['Swedish', 'Finnish', 'English'];
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
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>Languages Spoken</h3>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>Positions of Trust</h3>
        <ul>
          {positionsOfTrust.map((position, index) => (
            <li key={index}>{position}</li>
          ))}
        </ul>
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
          Tasks:
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
    <div>
      <h1>My resumé</h1>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>

    </div>
  )
}

export default App
