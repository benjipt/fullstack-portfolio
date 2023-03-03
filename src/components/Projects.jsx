import React from 'react';
import ProjectCard from './ProjectCard';

import simonCardImg from '../images/simon-card-img.jpg';
import journalsCardImg from '../images/journals-card-img.jpg';
import cryptologCardImg from '../images/cryptolog-card-img.jpg';
// import microconomyCardImg from '../images/microconomy-card-img.jpg'
import jobcoinCardImg from '../images/jobcoin-card-img.jpg';

export default function Projects() {
  const projects = [
    {
      img: jobcoinCardImg,
      name: 'Jobcoin',
      description:
        'Sign-on page and UI for a fake cryptocurrency wallet - users can send coins to any address and sign-in via any address, data-visualization/chart renders balance changes in wallet over time. Take-home project for a crypto exchange, data fetched and shaped from exchange API for wallet balance rendering. Only certain addresses will have coins in wallet, try: Jilly or Benji for demo purposes.',
      github: 'https://github.com/benjipt/jobcoin-ui',
      site: 'https://jobcoin-1c304e.netlify.app',
      id: 1,
    },
    {
      img: journalsCardImg,
      name: 'Journals',
      description:
        'A full-stack CRUD React app that allows users to write and store journal entries. An autocomplete search input is provided to help users search and select for specific journal entries based on keywords.',
      github: 'https://github.com/benjipt/journal-app-frontend',
      githubAPI: 'https://github.com/benjipt/journal-app-api',
      site: 'https://journals-app-frontend.herokuapp.com',
      id: 2,
    },
    {
      img: cryptologCardImg,
      name: 'Cryptolog',
      description:
        'A full-stack CRUD React app that allows users to maintain a log of all cryptocurrency buy/sell transactions on exchanges that they transact on.',
      github: 'https://github.com/benjipt/cryptolog_frontend',
      githubAPI: 'https://github.com/benjipt/cryptolog_api',
      site: 'https://cryptolog-frontend.herokuapp.com/',
      id: 3,
    },
    {
      img: simonCardImg,
      name: 'Simon',
      description:
        'A digital recreation of Simon, the memory game from Hasbro, with some modern updates. Sounds were created with Garageband.',
      github: 'https://github.com/benjipt/simon-game',
      site: 'https://wonderful-brahmagupta-3ad87a.netlify.app/',
      id: 4,
    },
  ];

  // const archivedProjects = [
  //     {
  //         img: microconomyCardImg,
  //         name: 'Microconomy',
  //         description: 'Privacy focused referral networks. Full-stack CRUD app using Express JS, deployed on Heroku.',
  //         github: 'https://github.com/benjipt/microeconomy',
  //         site: 'http://microeconomy.herokuapp.com/',
  //         display: false,
  //         id: null
  //     }
  // ]

  return (
    <div className='bottom text-center'>
      <div className='row justify-content-center pt-4 ps-3 pe-3'>
        {projects.map(project => {
          return <ProjectCard project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}
