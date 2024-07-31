import React from 'react';
import '../Home.css'
import RotatingLine from "./RotatingLine";


function Header() {
    return (
        <div id={"HeaderSection"}>
            <div className={"Header"}>
                <h1>Jacob Miller</h1>
            </div>
            <div className={"BottomLine"}>
                <RotatingLine direction={"left"}/>
                <RotatingLine direction={"right"}/>
            </div>

        </div>
    );
}

export default Header;
