import React from "react";


export const Header = (props) => {
    return(
        <section className="background">
            <header className="me">
                <h1>Hi, I'm Tori Bromma.</h1>
                <p className="headerText">I am a California based Web Developer</p>
                {/* <p className="headerText">Full Stack MERN - Mongo, Express, React, and Node</p> */}
                <div class="linkList">
                    <span id="links"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/tori.pham.54/"><i class="fab fa-facebook-f fa-lg"></i></a></span>
                    <span id="links"><a target="_blank" rel="noreferrer" href="www.linkedin.com/in/toribromma"><i class="fab fa-linkedin-in fa-lg"></i></a></span>
                    <span id="links"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/makinghist0ri/"><i class="fab fa-instagram fa-lg"></i></a></span>
                    <span id="links"><a target="_blank" rel="noreferrer" href="https://github.com/toribromma"><i class="fab fa-github fa-lg"></i></a></span>
                </div>
            </header>
        </section>
    )
}