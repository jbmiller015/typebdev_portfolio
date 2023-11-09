import ShowCase from "./showCase/ShowCase";
import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import './Home.css';
import Contact from "./Contact";
//<ShowCase/>
const Home = () => {
    return (
        <div className="Home">
            <Header/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Home;
