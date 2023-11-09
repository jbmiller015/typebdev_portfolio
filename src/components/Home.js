import ShowCase from "./showCase/ShowCase";
import React from "react";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import './Home.css';
//<ShowCase/>
const Home = () => {
    return (
        <div className="Home">
            <Header/>
        </div>
    );
}

export default Home;
