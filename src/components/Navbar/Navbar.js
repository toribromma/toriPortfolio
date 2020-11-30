import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";
import { Projects } from "../Projects/Projects";
import "./style.css";


export const Navbar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    const hamburger = (e) => {
        e.preventDefault();
        var x = document.getElementById("myTopnav");
    
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
    return(

            <div className="topnav" id="myTopnav">
                        <Link onClick={scrollToTop} className="item">Home</Link>
                        <Link
                         activeClass="active"
                         to="section1"
                         spy={true}
                         smooth={true}
                         offset={-40}
                         duration={500}
                        className="item">About</Link>
                        <Link
                         activeClass="active"
                         to="section2"
                         spy={true}
                         smooth={true}
                         offset={-40}
                         duration={500}
                        className="item">Resume</Link>
                        <Link
                         activeClass="active"
                         to="section3"
                         spy={true}
                         smooth={true}
                         offset={-40}
                         duration={500}
                        className="item">Projects</Link>
                        <Link
                         activeClass="active"
                         to="section4"
                         spy={true}
                         smooth={true}
                         offset={-40}
                         duration={500}
                        className="item">Contact</Link>

                        <a href="hamburger button" className="icon" onClick={hamburger} >
                            <i class="fa fa-bars"></i>
                        </a>
            </div>

    )
}

// export default Navbar;