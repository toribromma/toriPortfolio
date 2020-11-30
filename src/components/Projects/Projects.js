import React from "react";
import tileData from "./tileData";
import Button from "../Button/Button"

export const Projects = () => {
    return (
        <section style={{flexFlow: "row wrap"}} id="section3">
            {tileData.map((tile) => (
                <div>
                    <h2>{tile.title}</h2>
                    <img src={tile.img}
                    alt={tile.id}
                    width={200} 
                    height={200}/>
                    <p style={{
                        width:200, textAlign: "center", height: 100
                        }}>{tile.description}</p>
                    <Button><a target="blank" style={{textDecoration: "none", color: "white" }} href={tile.githubLink}>
                        github link
                    </a></Button>
                    <Button><a target="blank" style={{textDecoration: "none", color: "white"}} href={tile.deployedLink}>
                        deployed link
                    </a></Button>
                </div>
            ))}
        </section>
    )
}