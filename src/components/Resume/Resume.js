import React from "react"
import "./style.css"
export const Resume = () => {
    return(
        <section
        style={{
            display: "flex",
            alignItems:"center", 
            textAlign:"center",
            justifyContent: "center",
            backgroundColor: "white"
        }}>
                <div 
          >
                <div>
                    <h2><u>Education</u></h2>
                        <div>
                            <h3>University of California, Irvine</h3>
                            <h4>Web Development Certificate</h4>
                            <p>Graduated May 2020 with knowledge of MERN Stack</p>
                        </div>
                </div>
                <div>
                <div style={{
                    display: "flex",
                    flexFlow:"column wrap"
                    }}>
                    <h2><u>Work</u></h2>
                    <div>
                        <h3>Freelance</h3>
                        <h4>Working on Full Stack apps</h4>
                        <p>Available for work</p>
                    </div>
                    
                </div>
                </div>
                    
                </div>
                
            
    
        </section>
    )
}