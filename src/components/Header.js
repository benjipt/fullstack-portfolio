import React, { Component } from 'react'
import headshot from '../images/IMG_9582.jpg'

const imgStyle = {
    width: '200px',
    height: 'auto'
}

const pStyle = {
    fontFamily: 'Source Code Pro, monospace',
    fontWeight: '200'
}

export default class Header extends Component {
    render() {
        return (
            <div className="header text-center">
                <nav className="navbar navbar-dark bg-custom ps-4">
                    <form className="container-fluid justify-content-start">
                        <button className="btn btn-outline-dark me-3"
                                onClick={ this.props.showAbout }>ABOUT</button>
                        <button className="btn btn-outline-dark"
                                onClick={ this.props.showProjects }>PROJECTS</button>
                    </form>
                </nav>
                <h1 className="pt-4">BENJI THOMPSON</h1>
                <img src={headshot} className="pt-4 rounded" style={imgStyle} alt="headshot Benji Thompson" />
                <div className="pt-4 container">
                    <p style={pStyle}>Full-stack web engineer with a background in operations & project management in tech startups.</p>
                </div>
            </div>
        )
    }
}
