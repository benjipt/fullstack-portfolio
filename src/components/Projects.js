import React, { Component } from 'react'
import ProjectCard from './ProjectCard'

export default class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    img: '../images/journals.jpg',
                    name: 'Journals',
                    description: 'A full-stack CRUD React app that allows users to write and store journal entries. An autocomplete search input is provided to help users search and select for specific journal entries based on keywords.',
                    github: 'https://github.com/benjipt/journal-app-frontend',
                    site: 'https://cryptolog-frontend.herokuapp.com/',
                    id: 1
                }, {
                    img: '../images/simon-card-img.jpg',
                    name: 'Simon',
                    description: 'A digital recreation of Simon, the memory game from Hasbro, with some modern updates. Sounds were created with Garageband.',
                    github: 'https://github.com/benjipt/simon-game',
                    site: 'https://wonderful-brahmagupta-3ad87a.netlify.app/',
                    id: 2
                }, {
                    img: 'src/images/cryptolog.png',
                    name: 'Cryptolog',
                    description: 'A full-stack CRUD React app that allows users to maintain a log of all cryptocurrency buy/sell transactions on exchanges that they transact on.',
                    github: 'https://github.com/benjipt/cryptolog_frontend',
                    site: 'https://cryptolog-frontend.herokuapp.com/',
                    id: 3
                }, {
                    img: 'src/images/microconomy.png',
                    name: 'Microconomy',
                    description: 'Privacy focused referral networks. Full-stack CRUD app using Express JS, deployed on Heroku.',
                    github: 'https://github.com/benjipt/microeconomy',
                    site: 'http://microeconomy.herokuapp.com/',
                    id: 4
                }
            ]
        }
    }



    render() {
        return (
            <div className="bottom text-center">
                <div className="row justify-content-center pt-4">
                    { this.state.projects.map((project) => {
                        return (
                            <ProjectCard project={project}
                                            key={project.id} />
                        )
                    }) }
                </div>
            </div>
        )
    }
}
