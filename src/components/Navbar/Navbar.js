import React from "react";
import "./style.css";

export const Navbar = () => {


    return(
            <nav style={{backgroundColor: "transparent"}}>
                    <ul className="list">
                        <li className="item">Home</li>
                        <li className="item">About</li>
                        <li className="item">Resume</li>
                        <li className="item">Works</li>
                        <li className="item">Contact</li>
                    </ul>
            </nav>
    )
}

// export default Navbar;