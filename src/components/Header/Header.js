import React from 'react';
import '../Home.css'
import RotatingLine from "./RotatingLine";


function Header() {
    return (
        <div>
            <div className={"Header"}>
                <h1>Jacob Miller</h1>
            </div>
            <div className={"ButtonSections"}>
                <nav>
                    <ul>
                        <li style={{position: "inherit"}}><a className={"HomeButton"} href={'home'}>Home</a></li>
                        <li><a className={"AboutButton"} href={'about'}>About</a></li>
                        <li><a className={"ProjectsButton"} href={'projects'}>Projects</a></li>
                        <li><a className={"ContactButton"} href={'contact'}>Contact</a></li>
                    </ul>
                </nav>
            </div>
            <div className={"BottomLine"}>
                <RotatingLine direction={"left"}/>
                <RotatingLine direction={"right"}/>
            </div>

        </div>
    );
}

export default Header;
