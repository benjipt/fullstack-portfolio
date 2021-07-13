import React, { Component } from 'react'

export default class Projects extends Component {
    constructor(props) {
        super(props)

        this.state = {
            projects: [
                {
                    img: 'src/images/simon.png',
                    name: 'Simon',
                    description: 'A digital recreation of Simon, the memory game from Hasbro, with some modern updates. Sounds were created with Garageband.',
                    github: 'https://github.com/benjipt/simon-game',
                    site: 'https://wonderful-brahmagupta-3ad87a.netlify.app/'
                }, {
                    img: 'src/images/microconomy.png',
                    name: 'Microconomy',
                    description: 'Privacy focused referral networks. Full-stack CRUD app using Express JS, deployed on Heroku.',
                    github: 'https://github.com/benjipt/microeconomy',
                    site: 'http://microeconomy.herokuapp.com/'
                }, {
                    img: 'src/images/cryptolog.png',
                    name: 'Cryptolog',
                    description: 'A full-stack CRUD React app that allows users to maintain a log of all cryptocurrency buy/sell transactions on exchanges that they transact on.',
                    github: 'https://github.com/benjipt/cryptolog_frontend',
                    site: 'https://cryptolog-frontend.herokuapp.com/'
                }, {
                    img: 'src/images/journals.png',
                    name: 'Journals',
                    description: 'A full-stack CRUD React app that allows users to write and store journal entries. An autocomplete search input is provided to help users search and select for specific journal entries based on keywords.',
                    github: 'https://github.com/benjipt/journal-app-frontend',
                    site: 'https://cryptolog-frontend.herokuapp.com/'
                }
            ]
        }
    }

    render() {
        return (
            <div className="bottom">
                <div className="pt-2 container text-center">
                    <h4>PROJECTS</h4>
                </div>
            </div>
        )
    }
}
