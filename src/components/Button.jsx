import React from "react";
import "./button.css"

const Button = (props) => {
    return (
        <button className="button" onClick={props.onclick}>{props.children}</button>
    )   
}

export default Button