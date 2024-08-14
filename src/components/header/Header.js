import React from 'react';
import './style/Header.css'
import RotatingLine from "./RotatingLine";
import ButtonSections from "../buttonSections/ButtonSections";


function Header() {
    return (
        <div className={"HeaderSection"} id={"HeaderSection"}>
            <div className={"Header"}>
                <h1>Jacob Miller</h1>
            </div>
            <div className={"TagLine"}>
                <h3 className="font-mono text-lg font-semibold text-stone-500">Development</h3>
                <h3 className="text-lg font-semibold text-stone-500">&</h3>
                <h3 className="font-serif text-lg font-semibold text-stone-500">Design</h3>
            </div>
            <div className={"BottomLine"}>
                <RotatingLine direction={"left"}/>
                <RotatingLine direction={"right"}/>
            </div>
            <ButtonSections/>
        </div>
    );
}

export default Header;
