import ShowCase from "./showCase/ShowCase";
import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Projects from "./projects/Projects";
import './Home.css';
import Contact from "./contact/Contact";
import Resume from "./resume/Resume";
import SkillTree from "./skills/SkillTree";
import skills from '../info/skills.json'
import ButtonSections from "./buttonSections/ButtonSections";
import Skills from "./skills/Skills";
import Skills2 from "./skills/Skills2";
import Jelly from "./Jelly";
//<ShowCase/>
const Home = () => {
    return (
        <div className="Home">

            <Header/>
            <About/>
            <Resume/>
            <Projects/>
            <Skills2/>
            <Contact/>
        </div>
    );
}

export default Home;
