import React from 'react';
import './Home.css'

function Header() {
    return (
        <div className={"Header"}>
            <h1>Jacob Miller</h1>
            <nav>
                <ul>
                    <li><a href={'home'}>Home</a></li>
                    <li><a href={'about'}>About</a></li>
                    <li><a href={'projects'}>Projects</a></li>
                    <li><a href={'contact'}>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
