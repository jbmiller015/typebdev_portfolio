import ShowCase from "./showCase/ShowCase";
import React from "react";
import Header from "./header/Header";
import About from "./about/About";
import Projects from "./projects/Projects";
import './Home.css';
import Contact from "./Contact";
import Resume from "./resume/Resume";
import SkillTree from "./skills/SkillTree";
import skills from '../info/skills.json'
import ButtonSections from "./buttonSections/ButtonSections";
//<ShowCase/>
const Home = () => {
    return (
        <div className="Home">
            <ButtonSections/>
            <Header/>
            <About/>
            <Resume/>
            <Projects/>
            <SkillTree data={skills}/>
            <Contact/>
        </div>
    );
}

export default Home;
