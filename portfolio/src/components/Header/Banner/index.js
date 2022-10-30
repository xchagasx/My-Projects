import React from "react";
import './index.css'

export default function Banner() {
    return (
        <>
        <div className="div1">
            <h2>Hello I'M Fernando Chagas</h2>
            <h1>Studing BackEnd</h1>
            <h3>Welcome to my portfolio, I present you my projects below,</h3>
            <h3> it also contains a download for my CV</h3>
            <a href="https://drive.google.com/drive/folders/1exus4SqIGZKb1fIszV1Efv5flehoBL2E" target='blank'>
                <button type="button">Download CV</button>
            </a>
        </div>
        </>
    )
}