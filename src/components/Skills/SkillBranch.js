import React, {useState} from "react";
import SkillNode from "./SkillNode";

const renderSkills = (branchObj) => {
    return
};

const SkillBranch = ({branch}) => {
    const [expanded, setExpanded] = useState(false);
    const handleToggle = () => {
        setExpanded(!expanded);
    };

    console.log(branch)
    const [branchName, branchObj] = branch;
    return (
        <div className="skill-branch">
            <div className="branch-name" onClick={handleToggle}>{branchName}</div>
            {expanded && (<div className="skill-nodes">
                {Object.entries(branchObj.skills).map((skill, index) => (
                    <SkillNode key={index} skill={skill}/>
                ))}
            </div>)}
        </div>
    );
};

export default SkillBranch;
