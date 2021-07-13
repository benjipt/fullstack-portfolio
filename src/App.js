import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAbout: true,
      showProjects: false
    }

    this.showAbout = this.showAbout.bind(this)
    this.showProjects = this.showProjects.bind(this)
  }

  showAbout(event) {
    event.preventDefault()
    this.setState({
      showAbout: true,
      showProjects: false
    })
  }

  showProjects(event) {
    event.preventDefault()
    this.setState({
      showAbout: false,
      showProjects: true
    })
  }

  render() {
    return (
      <div>
        <Header 
          showAbout={ this.showAbout }
          showProjects={ this.showProjects } />
        
        { this.state.showAbout && <About /> }

        { this.state.showProjects && <Projects /> }
      </div>
    )
  }
}

