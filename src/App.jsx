import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';

export default function App() {
  // STATE HOOKS
  const [showAbout, setShowAbout] = useState(false);
  const [showProjects, setShowProjects] = useState(true);

  const clickShowAbout = e => {
    e.preventDefault();
    setShowAbout(true);
    setShowProjects(false);
  };

  const clickShowProjects = e => {
    e.preventDefault();
    setShowAbout(false);
    setShowProjects(true);
  };

  return (
    <div>
      <Header
        clickShowAbout={clickShowAbout}
        clickShowProjects={clickShowProjects}
      />

      {showAbout && <About />}

      {showProjects && <Projects />}
    </div>
  );
}
