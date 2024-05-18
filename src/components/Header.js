import React from 'react';
import './Home.css'

function Header() {
    return (
        <div className={"Header"}>
            <h1>Jacob Miller</h1>
            <nav>
                <ul>
                    <li><a className={"HomeButton"} href={'home'}>Home</a></li>
                    <li><a className={"AboutButton"} href={'about'}>About</a></li>
                    <li><a className={"ProjectsButton"} href={'projects'}>Projects</a></li>
                    <li><a className={"ContactButton"} href={'contact'}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
