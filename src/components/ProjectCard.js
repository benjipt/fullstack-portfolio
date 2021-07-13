import React, { Component } from 'react'

// const cardStyle = {
//     width: "18rem"
// }

// const imgStyle = {
//     width: "16rem",
//     height: "auto"
// }

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="card">
                    <img src={ this.props.project.img } className="card-img-top img-fluid" alt={ this.props.project.name } />
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.project.name }</h5>
                        <p className="card-text">{ this.props.project.description }</p>
                        <a className="btn btn-secondary" href={ this.props.project.github }>Github Repo</a>
                        <a className="btn btn-primary" href={ this.props.project.site }>Launch</a>
                    </div>
                </div>
            </div>
        )
    }
}
