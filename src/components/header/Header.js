import React from 'react';
import './style/Header.css'
import RotatingLine from "./RotatingLine";


function Header() {
    return (
        <div className={"HeaderSection"} id={"HeaderSection"}>
            <div className={"Header"}>
                <h1>Jacob Miller</h1>
            </div>
            <div className={"TagLine"}>
                <h3>Development & Design</h3>
            </div>
            <div className={"BottomLine"}>
                <RotatingLine direction={"left"}/>
                <RotatingLine direction={"right"}/>
            </div>
        </div>
    );
}

export default Header;
