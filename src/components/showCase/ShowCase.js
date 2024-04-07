import React from 'react';
import skills from '../../Info/skills.json';
import Skill from "./skills/Skill";
import resume from '../../Info/resume.json';
import Resume from "./resume/Resume";
import TextPopup from "../popups/TextPopup";
import replaceText from "../../Middleware/ReplaceText";

const ShowCase = () => {
    //TODO: Clean up
   const {extract} = replaceText();
   extract()

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
        <TextPopup/>
    </div>);
}
export default ShowCase;
