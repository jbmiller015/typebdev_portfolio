import React from 'react';
import skills from '../../info/skills.json'
import Skill from "./Skill";

const ShowCase = () => {

    const frontendSkills = () => {
        return Object.entries(skills).map((skill, i) => {
            return <Skill key={"skill" + i} skill={skill}/>
        })
    }

    return (<div className={"ui raised segment"}>
        {frontendSkills()}
    </div>);
}
export default ShowCase;
