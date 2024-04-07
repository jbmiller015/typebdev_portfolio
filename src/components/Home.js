import ShowCase from "./showCase/ShowCase";
import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import './Home.css';
import Contact from "./Contact";
import Resume from "./Resume/Resume";
import SkillTree from "./Skills/SkillTree";
import skills from '../Info/skills.json'
//<ShowCase/>
const Home = () => {
    return (
        <div className="Home">
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
