import React from 'react';
import Tech from "./Tech";

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
        if (attributes.languages) {
            return Object.entries(attributes.languages).map((lang, i) => {
                console.log(lang)
                return <Tech key={"lang" + i} data={lang}/>
            });
        }
    }

    return (<div className={"ui segment"}>
        <h2>{skillName}</h2>
        <label>Platforms/Frameworks</label>
        <div>
            {platforms()}
        </div>
        <label>Languages</label>
        <div>
            {languages()}
        </div>
    </div>);
}
export default Skill;
