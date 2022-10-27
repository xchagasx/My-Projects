import React from "react";
import './index.css'
import '../../../src/styles.css'
import Menu from "../Menu";
import Banner from "./Banner";

export default function Header() {
    return(
        <>
        <header>
            <div className="container">
                <div>
                    logo
                </div>
                <Menu />
            </div>
        </header>
        <Banner />
        </>
    )
}