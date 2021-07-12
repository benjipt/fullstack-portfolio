import React, { Component } from 'react'
import headshot from '../images/IMG_9582.jpg'

const imgStyle = {
    width: '200px',
    height: 'auto'
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
                <h1 className="pt-4 pb-4">BENJI THOMPSON</h1>
                <img src={headshot} className="rounded" style={imgStyle} alt="headshot Benji Thompson" />
            </div>
        )
    }
}
