export default function About() {
  return (
    <div className='container justify-content-center' data-testid='about'>
      <div className='ms-4 mt-5'>
        <h3>Background:</h3>
        <p>
          As a skilled developer, I take pride in crafting visually appealing
          and captivating user experiences that are underpinned by clean,
          efficient, and well-documented code. My passion lies in merging
          aesthetics with functionality to deliver seamless digital experiences
          that excite users.
        </p>
        <p>
          Since 2015, I’ve taken on leadership roles in teams across customer
          support, product operations, and engineering. My multidisciplinary
          background allows me to understand user needs and pain points enabling
          simple and performant solutions for an array of user personas and use
          cases. Some notable achievements:
        </p>
        <ul>
          <li>
            As part of the money team, shipped a full-stack solution which
            successfully reduced customers’ payment failures by $829k in one
            month (Software Engineer, Odeko)
          </li>
          <li>
            Independently developed an internal application which saved my
            colleague 10 - 15 hours a week of tedious analysis and data entry,
            while also reducing the burden of third-party licensing fees by tens
            of thousands of dollars per annum (Software Engineer, Odeko)
          </li>
          <li>
            Implemented multi-timezone support in ordering & delivery app,
            allowing expansion to new markets. (Software Engineer, Odeko)
          </li>
          <li>
            Developed a chatbot using Google Cloud DialogFlow NLP for efficient
            onboarding and enhanced support operations (Customer Support &
            Insights Manager, Trōv)
          </li>
        </ul>
      </div>
      <div className='ms-4 mt-5 mb-5'>
        <h3>Technology Stack:</h3>
        <p>Front-End</p>
        <ul>
          <li>React & Vue</li>
          <li>Redux</li>
          <li>Typescript & Javascript</li>
          <li>Graphql & REST</li>
          <li>Theme UI, Tailwind, MUI, Bootstrap</li>
          <li>React Testing Library, Jest, Mocha</li>
          <li>and of course: HTML & CSS</li>
        </ul>
        <p>Back-End</p>
        <ul>
          <li>ExpressJS (Node)</li>
          <li>Ruby on Rails</li>
          <li>MongoDB (NoSQL Database)</li>
          <li>PostgreSQL (SQL Database)</li>
          <li>Rspec, Minitest</li>
        </ul>
        <p>Hosting</p>
        <ul>
          <li>Heroku</li>
          <li>Netlify</li>
        </ul>
        <p>Dev & Design Tools</p>
        <ul>
          <li>Git & Github</li>
          <li>Github Actions, Concourse for CI/CD</li>
          <li>Jira, Shortcut for Agile Workflow</li>
          <li>Figma for design collaboration/mocking</li>
        </ul>
      </div>
    </div>
  );
}
