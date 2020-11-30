import React from "react"

const Button = (props) => {
    return(
    <button
    style={{
        backgroundColor: "rgba(40,44,80,0.6)    ",
        fontFamily: "Open Sans",
        padding: "8px 20px",
        margin: 5,
        border: "transparent",
        borderRadius: 2,
    }}
    >
    {props.children}
    </button>
    )
}

export default Button;