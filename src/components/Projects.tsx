import ProjectCard from './ProjectCard';
import simonCardImg from '../assets/images/simon-card-img.jpg';
import journalsCardImg from '../assets/images/journals-card-img.jpg';
import cryptologCardImg from '../assets/images/cryptolog-card-img.jpg';
import microconomyCardImg from '../assets/images/microconomy-card-img.jpg';
import jobcoinCardImg from '../assets/images/jobcoin-card-img.jpg';
import confidentialCardImG from '../assets/images/confidential-card-img.jpg';
import { Project } from '../types';

export default function Projects() {
  const projects: Project[] = [
    {
      img: jobcoinCardImg,
      name: 'Bitcorn',
      description:
        'This project is a full-stack web application built with React and Ruby on Rails. It involves creating a fictional cryptocurrency called Bitcorn, where users can send coins to any address and track their wallet balance changes over time through a data visualization. The frontend of the app is built using Typescript, React, D3, and Vite and is hosted on Netlify. The backend is built with Ruby on Rails and PostgreSQL and is hosted on Heroku. For demo purposes, sign in with "Jilly" or "Benji".',
      github: 'https://github.com/benjipt/bitcorn-app',
      githubAPI: 'https://github.com/benjipt/bitcorn-chain',
      site: 'https://bitcorn.netlify.app',
    },
    {
      img: confidentialCardImG,
      name: 'Pricing Controller',
      description:
        'I independently created and deployed a pricing app that streamlined the pricing management process for e-commerce catalog items. By automating tedious analysis and data entry tasks, my colleague was able to save 10-15 hours a week. Moreover, the app helped our organization save tens of thousands of dollars in 3rd party licensing fees. I used Typescript, React, and Redux to develop the app on top of a federated GraphQL architecture using Apollo and urql.',
      site: 'https://odeko.com',
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
      img: journalsCardImg,
      name: 'Journals',
      description:
        'A full-stack CRUD React app that allows users to write and store journal entries. An autocomplete search input is provided to help users search and select for specific journal entries based on keywords.',
      github: 'https://github.com/benjipt/journal-app-frontend',
      githubAPI: 'https://github.com/benjipt/journal-app-api',
      // site: 'https://journals-app-frontend.herokuapp.com',
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
