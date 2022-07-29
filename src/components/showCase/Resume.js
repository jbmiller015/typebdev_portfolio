import React from 'react';
import Tech from "./Tech";
import Education from "./Education";
import Work from "./Work";
import Project from "./Project";

const Resume = (props) => {

    const [resName, attributes] = props.exp;

    const values = () => {
        switch (resName) {
            case "education":
                return Object.entries(attributes).map((values, i) => {
                    return <Education key={"education" + i} values={values}/>
                })
            case"work":
                return Object.entries(attributes).map((values, i) => {
                    return <Work key={"education" + i} values={values}/>
                })
            case"projects":
                return Object.entries(attributes).map((values, i) => {
                    return <Project key={"education" + i} values={values}/>
                })
        }
    }

    const platforms = () => {
        if (attributes) {
            console.log(attributes)
            return Object.entries(attributes).map((value, i) => {
                console.log(value)
                return (<div>
                    <div>{value[0]}</div>
                    <div>{value[1]}</div>
                </div>)
            });
        }
    }

    const languages = () => {
        let lang;
        if (attributes.languages) {
            lang = Object.entries(attributes.languages).map((lang, i) => {
                return <Tech key={"lang" + i} data={lang}/>
            });
            return (
                <div>
                    <label>Languages</label>
                    {lang}
                </div>
            );
        }
    }

    return (<div className={"ui segment"}>{resName}</div>);
}
export default Resume;
