import React from 'react';
import Tech from "./Tech";
import replaceText from "../../../Middleware/ReplaceText";

const Skill = (props) => {


    const [skillName, attributes] = props.skill;

    const platforms = () => {
        if (attributes.frameworks) {
            return Object.entries(attributes.frameworks).map((framework, i) => {
                return <Tech key={"plat" + i} data={framework}/>
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

    return (<div className={"ui segment"}>
        <h2>{skillName}</h2>
        <label>Platforms/Frameworks</label>
        <div>
            {platforms()}
        </div>
        {languages()}
    </div>);
}
export default Skill;
