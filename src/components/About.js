import React from 'react'

export default function About() {
    return (
        <div className="bottom">
            <div className="pt-4 row justify-content-center">
                <div className="col-md ms-4">
                    <h5>Background:</h5>
                    <p>I LOVE creating visually stunning and engaging user experiences that are supported by clean, efficient, and well-documented code!</p>
                    <p>Since 2015, I’ve taken on leadership roles in teams across customer support, product operations, and engineering. My multidisciplinary background allows me to understand user needs and pain points enabling simple and performant solutions for an array of user personas and use cases. Some notable achievements:</p>
                    <ul>
                        <li>Shipped a failed payment notification feature that reduced failed payments amount by $829k in one month. (Odeko)</li>
                        <li>Implemented multi-timezone support in ordering & delivery app, allowing expansion to customers outside of eastern time zone. (Odeko)</li>
                        <li>Developed an onboarding and support chatbot and integrated with Google Cloud Dialogflow for natural language processing and Slack for live chat support (Trōv).</li>
                    </ul>
                    <p>My cross-disciplinary background has afforded me a well developed tech startup acumen with a rare ability to manage both business and technical challenges, but my experiences have taught me that my professional value really boils down to the following:</p>
                    <ul>
                        <li>I am both highly creative and analytical.</li>
                        <li>I approach problems from the vantage point of the user--reconciling competing needs and driving strategic value across stakeholders groups.</li>
                        <li>I am constantly reaching and am forever dissatisfied with the status-quo; a life-long learner who rejects conformity to average standards.</li>
                        <li>I am a trusted leader with a knack for elevating the natural strengths of those I work with.</li>
                    </ul>
                </div>
                <div className="col-md ms-4">
                    <h5>Technology Stack:</h5>
                    <p>Front-End</p>
                    <ul>
                        <li>React</li>
                        <li>Redux</li>
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
                    <p>Unit Testing</p>
                    <ul>
                        <li>Jest</li>
                        <li>Mocha</li>
                        <li>Chai</li>
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
