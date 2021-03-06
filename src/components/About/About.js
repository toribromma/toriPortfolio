import React from "react";
import profilePic from "../../images/profile1.jpg"

export const About = (props) => {
    return (
        <section id={props.id} style={{backgroundColor: "snow", flexDirection:"column"}}>
        <img className="avatar" alt="profile pic" 
        src={profilePic} 
        width={180} 
        height={180}
        style={{borderRadius: "50%"}}
        >
        </img>
        <div
        style={{width: 200}}
        >
            <h2>About Me</h2>
            <p>I enjoy creating user-friendly and web responsive apps.</p>
        </div>
        <div className="col">
            <h2>
                Contact Details
            </h2>
            <ul style={{
                listStyleType:"none", 
                padding: 0, 
                margin: "0 0 10px 0", 
                lineHeight: 1.5,
                fontWeight: 600
                
                }}>
                <li>Tori Bromma</li>
                <li>Newport Beach, CA 92660</li>
                <li>1 (714) 702-0401</li>
                <li>toribromma@gmail.com</li>
            </ul>
            <button
            style={{
                backgroundColor: "rgba(40,44,80,1)",
                fontFamily: "Open Sans",
                padding: "8px 20px",
                marginBottom: 5,
                color: "white",
                border: "transparent",
                borderRadius: 2
            }}
            ><i
            style={{padding: 5}}
            className="fas fa-download"></i>
            Download Resume</button>
        </div>

        </section>
    )
}