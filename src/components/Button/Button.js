import React from "react"

const Button = (props) => {
    return(
    <button
    style={{
        backgroundColor: "black",
        fontFamily: "Open Sans",
        padding: "8px 10px",
        margin: 5,
        boxShadow: "2px 2px 2px grey",
        borderRadius: 4,
        
    }}
    >
    {props.children}
    </button>
    )
}

export default Button;