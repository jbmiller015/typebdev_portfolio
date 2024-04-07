import React, {useState} from "react";

const SkillNode = ({skill}) => {
    const [skillName, skillObj] = skill;
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };
    console.log(skill)
    if (!skill) return null; // Added error handling
    return (
        <div className="skill-node" onClick={handleToggle}>
            <i className={skillObj.icon ? skillObj.icon.name : ""}></i>
            {expanded && (
                <div className="skill-details">
                    <div className="skill-name">{skillName}</div>
                    <div className="skill-description">{skillObj.description}</div>
                    <div className="skill-exp">{skillObj.exp?.years || 0} years of experience</div>
                    <div className="skill-notes">{skillObj.exp?.notes || 'No notes available'}</div>
                </div>)}
        </div>
    );
};
export default SkillNode;
