import { useState, MouseEvent } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import { Section } from './types';

export default function App() {
  // STATE HOOK
  const [toggleSection, setToggleSection] = useState(Section.projects);

  const clickShowAbout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleSection(Section.about);
  };

  const clickShowProjects = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToggleSection(Section.projects);
  };

  return (
    <div>
      <Header
        clickShowAbout={clickShowAbout}
        clickShowProjects={clickShowProjects}
        toggleSection={toggleSection}
      />
      {toggleSection === Section.projects ? <Projects /> : <About />}
    </div>
  );
}
