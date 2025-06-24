import React from "react"
import avatar from "./image.png"

export default function Header(props) {


    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}