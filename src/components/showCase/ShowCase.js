import React from 'react';
import skills from '../../info/skills.json';
import Skill from "./Skill";
import resume from '../../info/resume.json';
import Resume from "./Resume";

const ShowCase = () => {

    const skillComp = () => {
        return Object.entries(skills).map((skill, i) => {
            return <Skill key={"skill" + i} skill={skill}/>
        })
    }

    const resumeComp = () => {
        return Object.entries(resume).map((exp, i) => {
            return <Resume key={"resume" + i} exp={exp}/>
        })
    }

    return (<div className={"ui raised segment"}>
        {skillComp()}
        {resumeComp()}
    </div>);
}
export default ShowCase;
