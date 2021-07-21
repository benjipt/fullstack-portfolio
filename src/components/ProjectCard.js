import React, { Component } from 'react'

export default class ProjectCard extends Component {
    render() {
        return (
            <div className="col-md pb-3">
                <div className="card">
                    <img src={this.props.project.img} className="card-img-top" alt="card img" />
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.project.name }</h5>
                        <p className="card-text">{ this.props.project.description }</p>
                        <a className="btn btn-sm btn-secondary me-2 mb-1" href={ this.props.project.github }>Github Repo</a>
                        { this.props.project.githubAPI &&
                        <a className="btn btn-sm btn-secondary me-2 mb-1" href={ this.props.project.githubAPI }>API Github Repo</a> }
                        <a className="btn btn-sm btn-primary" href={ this.props.project.site }>Launch</a>
                    </div>
                </div>
            </div>
        )
    }
}
