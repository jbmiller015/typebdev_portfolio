import React from 'react';
import './Home.css'

function Header() {
    return (
        <div className={"Header"}>
            <h1>Jacob Miller</h1>
            <nav>
                <ul>
                    <li><a className={"homeButton"} href={'home'}>Home</a></li>
                    <li><a className={"aboutButton"} href={'about'}>About</a></li>
                    <li><a className={"projectsButton"} href={'projects'}>Projects</a></li>
                    <li><a className={"contactButton"} href={'contact'}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
