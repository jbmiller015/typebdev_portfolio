import ShowCase from "./showCase/ShowCase";
import TextPopup from "./popups/TextPopup";
import React from "react";

const Home = () => {
    return (
        <div className="Home">
            <div className={"ui container"}>
                <ShowCase/>
                <TextPopup/>
            </div>
        </div>
    );
}

export default Home;
