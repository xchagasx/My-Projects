import React from "react";
import './index.css'
import '../../../src/styles.css'
import Menu from "../Menu";
import Banner from "./Banner";

import { FaDatabase } from "react-icons/fa";

export default function Header() {
    return(
        <>
        <header>
            <div className="container">
                <div>
                    <a><FaDatabase /></a>
                </div>
                <Menu />
            </div>
        </header>
        <Banner />
        </>
    )
}