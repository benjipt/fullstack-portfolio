import React, { Component } from 'react'

// const imgStyle = {
//     display: "block",
//     width: "100%",
//     height: "auto"
// }

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="col-5 pb-3">
                <div className="card">
                    {/* <img style={imgStyle} src="" className="card-img-top" alt={ this.props.project.name } /> */}
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.project.name }</h5>
                        <p className="card-text">{ this.props.project.description }</p>
                        <a className="btn btn-sm btn-secondary me-2" href={ this.props.project.github }>Github Repo</a>
                        <a className="btn btn-sm btn-primary" href={ this.props.project.site }>Launch</a>
                    </div>
                </div>
            </div>
        )
    }
}