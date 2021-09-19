import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

export default function App() {
  // STATE HOOKS
  const [ showAbout, setShowAbout ] = useState(true)
  const [ showProjects, setShowProjects ] = useState(false)

  const clickShowAbout = e => {
    e.preventDefault()
    setShowAbout(true)
    setShowProjects(false)
  }

  const clickShowProjects = e => {
    e.preventDefault()
    setShowAbout(false)
    setShowProjects(true)
  }

  return (
    <div>
      <Header 
        showAbout={ clickShowAbout }
        showProjects={ clickShowProjects } />
      
      { showAbout && <About /> }

      { showProjects && <Projects /> }
    </div>
  )
}

