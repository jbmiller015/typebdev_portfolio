import React from 'react';
import './Home.css'

function Header() {
    return (
        <div className={"Header"}>
            <h1>Jacob Miller</h1>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Projects</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
