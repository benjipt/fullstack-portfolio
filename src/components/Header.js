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
                    <div className="container-fluid">
                        {/* <h4>ABOUT</h4> */}
                        <button className="btn btn-outline-dark">ABOUT</button>
                    </div>
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
