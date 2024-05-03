import React, {useState} from "react";

const SkillNode = ({skill}) => {
    const [uniqueId] = useState(
        () => 'node_' + Math.random().toFixed(5).slice(2),
    );
    const [skillName, skillObj] = skill;
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        if (expanded === true) {
            onNodeClose()
        }
        setExpanded(!expanded);
    };
    const onNodeClose = () => {
        const nodeEl = document.querySelector(`#${uniqueId} .skill-node`);
        const containerEl = nodeEl?.parentElement;
        const clonedNodeEl = nodeEl?.cloneNode(true);

        if (!clonedNodeEl) return; // safeguard

        clonedNodeEl.classList.add("skill-node--close");
        clonedNodeEl.addEventListener("animationend", () => {
            containerEl?.removeChild(clonedNodeEl);
        });

        containerEl?.appendChild(clonedNodeEl);
    }
    console.log(skill)
    if (!skill) return null; // Added error handling
    return (
        <div className="skill-node" onClick={handleToggle} id={uniqueId}>
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
