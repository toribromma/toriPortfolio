import React from "react";
import "./style.css"

export const Header = () => {
    return(
        <section className="background">
            <header className="me">
                <h1>Hi, I'm Tori Bromma.</h1>
                <p>I am a California based Web Developer</p>
                <p>Full Stack MERN - Mongo, Express, React, and Node</p>
                <div class="linkList">
                    <span id="links"><i class="fab fa-facebook-f fa-lg"></i></span>
                    <span id="links"><i class="fab fa-linkedin-in fa-lg"></i></span>
                    <span id="links"><i class="fab fa-instagram fa-lg"></i></span>
                    <span id="links"><i class="fab fa-github fa-lg"></i></span>
                </div>
            </header>
        </section>
    )
}