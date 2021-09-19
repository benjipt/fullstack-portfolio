import React from 'react'
import headshot from '../images/IMG_9582.jpg'

const imgStyle = {
    width: '200px',
    height: 'auto'
}

export default function Header({ showAbout, showProjects }) {
    return (
        <div className="header text-center">
            <nav className="navbar navbar-dark bg-custom ps-4">
                <form className="justify-content-start">
                    <button className="btn btn-sm btn-outline-dark me-3"
                            onClick={ showAbout }>ABOUT</button>
                    <button className="btn btn-sm btn-outline-dark"
                            onClick={ showProjects }>PROJECTS</button>
                </form>
                <div className="d-flex flex-row-reverse">
                    <a className="nav-link" href="https://github.com/benjipt" target="_blank" rel="noreferrer">Github</a>
                    <a className="nav-link" href="https://www.linkedin.com/in/benjithompson/" target="_blank" rel="noreferrer">Linkedin</a>
                </div>
            </nav>
            <h1 className="pt-4">BENJI THOMPSON</h1>
            <img src={headshot} className="pt-4 rounded" style={imgStyle} alt="headshot Benji Thompson" />
            <div className="pt-4 pb-1 container">
                <p>Full-stack web developer and React engineer based in Brooklyn, NY</p>
            </div>
        </div>
    )
}
