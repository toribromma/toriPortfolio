import React from "react"
export const Resume = (props) => {
    return(
        <section id={props.id}>
                <div>
                    <h2><u>Education</u></h2>
                        <div>
                            <h3>University of California, Irvine</h3>
                            <h4>Web Development Certificate</h4>
                            <p>Graduated May 2020 with knowledge of MERN Stack</p>
                        </div>
                </div>
                <div>
                    <h2><u>Work</u></h2>
                    <div>
                        <h3>Freelance</h3>
                        <h4>Working on Full Stack apps</h4>
                        <p>Available for work</p>
                    </div>
                    
                </div>
                <div>
                    <h2><u>Skills</u></h2>
                    <ul>
                        <p>HTML, CSS, Javascript, React, Redux, Thunk, Hooks</p>
                        <p>Express, Node, MongoDB, MySQL, Microservices, Encryption, JWT, OAuth</p>
                    </ul>
                    
                </div>
        </section>
    )
}