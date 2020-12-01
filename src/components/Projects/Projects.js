import React from "react";
import tileData from "./tileData";
import Button from "../Button/Button"
import background from "../../images/1.jpg"

export const Projects = () => {
    return (
        <section id="section3">
            {tileData.map((tile) => (
                <div>
                    <h2>{tile.title}</h2>
                    <img src={tile.img}
                    alt={tile.id}
                    width={200} 
                    height={200}
                    style={{
                        border: "2px solid black",
                        borderRadius: "4px"
                        
                    }}
                    />
                    <p style={{
                        width:250,
                         height: 75, fontSize: 15
                        }}>{tile.description}</p>
                    <Button><a target="blank" style={{textDecoration: "none", color: "white" }} href={tile.githubLink}>
                        Github
                    </a></Button>
                    <Button><a target="blank" style={{textDecoration: "none", color: "white"}} href={tile.deployedLink}>
                        Deployed
                    </a></Button>
                </div>
            ))}
        </section>
    )
}