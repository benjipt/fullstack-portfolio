import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  // ENUMS
  const Section = {
    projects: 'projects',
    about: 'about',
  };
  // STATE HOOK
  const [toggleSection, setToggleSection] = useState(Section.projects);

  const clickShowAbout = e => {
    e.preventDefault();
    setToggleSection(Section.about);
  };

  const clickShowProjects = e => {
    e.preventDefault();
    setToggleSection(Section.projects);
  };

  return (
    <div>
      <Header
        clickShowAbout={clickShowAbout}
        clickShowProjects={clickShowProjects}
      />
      {toggleSection === Section.projects ? <Projects /> : <About />}
    </div>
  );
}
