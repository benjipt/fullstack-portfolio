import React from 'react'

export default function About() {
    return (
        <div className="bottom">
            <div className="pt-4 row justify-content-center">
                <div className="col-md ms-4">
                    <h5>Background:</h5>
                    <p>Since 2015, I've been working in tech startups leading in a variety of roles alongside customer support, product, and engineering teams. In 2018, while working in a non-technical role, I built an onboarding & support chatbot which would allow our company to scale more efficiently in a new market. This was a valuable experience for me because it revealed that in addition to my skillsets as a capable project & operations leader, I learned that I am also, a creative engineer. I love building products and experiences that help facilitate improvements to sustained quality of life on our world.</p>
                </div>
                <div className="col-md ms-4">
                    <h5>Technology Stack:</h5>
                    <p>Front-End</p>
                    <ul>
                        <li>React</li>
                        <li>ReCharts for data-visualization (React)</li>
                        <li>Google OAuth for login/authentication (Google Cloud)</li>
                        <li>Bootstrap & Material UI (CSS Frameworks)</li>
                        <li>and of course: HTML, CSS, Javascript</li>
                    </ul>
                    <p>Back-End</p>
                    <ul>
                        <li>Express.js (Javascript)</li>
                        <li>Flask (Python)</li>
                        <li>MongoDB (NoSQL Database)</li>
                        <li>PostgreSQL (SQL Database)</li>
                    </ul>
                    <p>Hosting</p>
                    <ul>
                        <li>Heroku</li>
                        <li>Netlify</li>
                    </ul>
                    <p>Dev Tools</p>
                    <ul>
                        <li>Git</li>
                        <li>Github</li>
                        <li>Jira</li>
                        <li>Postman</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
