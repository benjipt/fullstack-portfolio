import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="bottom">
                {/* <div className="pt-2 container text-center">
                    <h4>ABOUT</h4>
                </div> */}
                <div className="pt-4 row justify-content-center">
                    <div className="col-md ms-4">
                        <h5>Background:</h5>
                        <p>Since 2015, I've been working in tech startups leading in a variety of roles alongside customer support, product, and engineering teams. In 2018, while working in a non-technical role, I built an onboarding & support chatbot which would allow our company to scale more efficiently in a new market. This was a valuable experience for me because it revealed that in addition to my skillsets as a capable project & operations leader, I learned that I am also, a creative engineer. I love building products and experiences that help facilitate improvements to sustained quality of life on our world.</p>
                    </div>
                    <div className="col-md ms-4">
                        <h5>Technology:</h5>
                        <ul>
                            <li>MongoDB, Express.js, React, Node.js (MERN stack)</li>
                            <li>HTML, CSS, Javascript</li>
                            <li>I also have familiarity with Python/Flask and Postgres and would be interested in learning other languages/frameworks for the right role and team.</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
