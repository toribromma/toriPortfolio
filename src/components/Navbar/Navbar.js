import React from "react";
import {Link, animateScroll as scroll} from "react-scroll";
import "./style.css";


export const Navbar = () => {

    const scrollToTop = () => {
        scroll.scrollToTop();
      };

    return(

            <nav style={{backgroundColor: "transparent"}}>
                    <div className="list">
                        <Link
                         activeClass="active"
                         to="section1"
                         spy={true}
                         smooth={true}
                         offset={-30}
                         duration={500}
                        className="item">About</Link>
                        <Link
                         activeClass="active"
                         to="section2"
                         spy={true}
                         smooth={true}
                         offset={0}
                         duration={500}
                        className="item">Resume</Link>
                        <Link
                         activeClass="active"
                         to="section3"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                        className="item">Works</Link>
                        <Link
                         activeClass="active"
                         to="section4"
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                        className="item">Contact</Link>
                        <Link onClick={scrollToTop} className="item">Back to Top</Link>
                    </div>
            </nav>
    )
}

// export default Navbar;