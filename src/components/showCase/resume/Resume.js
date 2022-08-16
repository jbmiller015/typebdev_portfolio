import React from 'react';
import Education from "./Education";
import Work from "./Work";
import Project from "./Project";

const Resume = (props) => {

    const [resName, attributes] = props.exp;

    const values = () => {
        switch (resName) {
            case "Education":
                return <div className={"flexContainer"}>{
                    Object.entries(attributes).map((values, i) => {
                            return <Education key={"education" + i} values={values[1]}/>
                        }
                    )}</div>
            case"Career":
                return Object.entries(attributes).map((values, i) => {
                    return <Work key={"career" + i} values={values[1]}/>
                })
            case"Projects":
                return Object.entries(attributes).map((values, i) => {
                    return <Project key={"projects" + i} values={values[1]}/>
                })
        }
    }

    return (
        <div className={"ui segment"}><h2>{resName}</h2>
            {values()}
        </div>);
}
export default Resume;
