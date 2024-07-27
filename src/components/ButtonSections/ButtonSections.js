import React from "react";
import './style/ButtonSections.css'

const ButtonSections = () => {
    return (<div className={"ButtonSections"}>
        <nav>
            <ul>
                <li className={"AboutElement"}><a className={"AboutButton"}
                                                  href={'about'}>About</a></li>
                <li className={"ProjectsElement"}><a className={"ProjectsButton"}
                                                     href={'projects'}>Projects</a>
                </li>
                <li className={"SkillsElement"}><a className={"SkillsButton"}
                                                   href={'skills'}>Skills</a></li>
                <li className={"ContactElement"}><a className={"ContactButton"}
                                                    href={'contact'}>Contact</a>
                </li>
            </ul>
        </nav>
    </div>);

}
export default ButtonSections;
