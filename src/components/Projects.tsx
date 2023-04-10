import ProjectCard from './ProjectCard';
import simonCardImg from '../images/simon-card-img.jpg';
import journalsCardImg from '../images/journals-card-img.jpg';
import cryptologCardImg from '../images/cryptolog-card-img.jpg';
import microconomyCardImg from '../images/microconomy-card-img.jpg';
import jobcoinCardImg from '../images/jobcoin-card-img.jpg';
import confidentialCardImG from '../images/confidential-card-img.jpg';
import { Project } from '../types';

export default function Projects() {
  const projects: Project[] = [
    {
      img: confidentialCardImG,
      name: 'Pricing Controller',
      description:
        'Independently developed and deployed this React microservice for Odeko, which streamlines the pricing management process for e-commerce catalog items, replacing manual work with automated features. This saves the company significant amounts of time and licensing costs. Built with: Typescript, React, and Redux, on top of a federated graphql architecture using Apollo and urql.',
      site: 'https://odeko.com',
    },
    {
      img: jobcoinCardImg,
      name: 'Bitcorn',
      description:
        'Sign-on page and wallet UI for a cryptocurrency called Bitcorn (recently updated from Jobcoin 4-6-23) - users can send coins to any address and sign-in via any address, data-visualization/chart renders balance changes in wallet over time. Take-home project for a crypto exchange, data fetched and shaped from exchange API for wallet balance rendering. Only certain addresses will have coins in wallet, try: Jilly or Benji for demo purposes.',
      github: 'https://github.com/benjipt/bitcorn-app',
      site: 'https://bitcorn.netlify.app',
    },
    {
      img: journalsCardImg,
      name: 'Journals',
      description:
        'A full-stack CRUD React app that allows users to write and store journal entries. An autocomplete search input is provided to help users search and select for specific journal entries based on keywords.',
      github: 'https://github.com/benjipt/journal-app-frontend',
      githubAPI: 'https://github.com/benjipt/journal-app-api',
      // site: 'https://journals-app-frontend.herokuapp.com',
    },
    {
      img: simonCardImg,
      name: 'Simon',
      description:
        'A digital recreation of Simon, the memory game from Hasbro, with some modern updates. Sounds were created with Garageband.',
      github: 'https://github.com/benjipt/simon-game',
      site: 'https://wonderful-brahmagupta-3ad87a.netlify.app/',
    },
    {
      img: cryptologCardImg,
      name: 'Cryptolog',
      description:
        'A full-stack CRUD React app that allows users to maintain a log of all cryptocurrency buy/sell transactions on exchanges that they transact on.',
      github: 'https://github.com/benjipt/cryptolog_frontend',
      githubAPI: 'https://github.com/benjipt/cryptolog_api',
      // site: 'https://cryptolog-frontend.herokuapp.com/',
    },
    {
      img: microconomyCardImg,
      name: 'Microconomy',
      description:
        'Privacy focused referral networks. Full-stack CRUD app using Express JS, deployed on Heroku.',
      github: 'https://github.com/benjipt/microeconomy',
      // site: 'http://microeconomy.herokuapp.com/',
    },
  ];

  return (
    <div className='container text-center mb-5' data-testid='projects'>
      <div className='row justify-content-center ps-3 pe-3'>
        <ProjectCard project={projects[0]} />
        <ProjectCard project={projects[1]} />
      </div>
      <div className='row justify-content-center ps-3 pe-3'>
        <ProjectCard project={projects[2]} />
        <ProjectCard project={projects[3]} />
      </div>
      <div className='row justify-content-center ps-3 pe-3'>
        <ProjectCard project={projects[4]} />
        <ProjectCard project={projects[5]} />
      </div>
    </div>
  );
}
