import React from "react";
import profilePic from "../../images/profile1.jpg"
export const About = () => {
    return (
        <section style={{
            display: "flex", 
            alignItems:"center", 
            alignContent: "center",
            textAlign:"center",
            flexFlow:"column wrap",
            justifyContent: "center",
            }}>
        <img alt="profile pic" 
        src={profilePic} 
        width={180} 
        height={180}
        style={{borderRadius: "50%", marginTop: 100}}
        margin
        >
        </img>
        <div 
        // margin={5}
        >
            <h2>About Me</h2>
            <p style={{fontSize: 18, letterSpacing: -1}}>My name is Tori. I am a Full Stack ReactJS Developer</p>
            <p style={{letterSpacing: -1}}>I enjoy creating user-friendly and responsive apps.</p>
        </div>
        <div 
        style={{}}
        >
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
                backgroundColor: "rgba(40,44,80,0.6)    ",
                fontFamily: "Open Sans",
                padding: "8px 20px",
                marginBottom: 5,
                color: "white",
                border: "transparent",
                borderRadius: 2
            }}
            ><i
            style={{padding: 5}}
             class="fas fa-download"></i>
            Download Resume</button>
        </div>
           

        
        </section>
    )
}