import React, {useState} from "react";
import SkillNode from "./SkillNode";
import Slider from "./Slider";

const renderSkills = (branchObj) => {
    return
};

const SkillBranch = ({branch}) => {
    const [uniqueId] = useState(
        () => 'branch_' + Math.random().toFixed(5).slice(2),
    );
    const extraStyles = {
        // position: "fixed",
        // top: "30px",
        // left: 0,
        // right: 0,
        // bottom: 0,
        // background: "rgba(0, 0, 0, 0.4)",
        // color: "#FFF"
    };

    const [expanded, setExpanded] = useState(false);
    const handleEnter = () => {
        setExpanded(true);
    };
    const handleLeave = () => {
        onNodesClose()

        setExpanded(false);
    };

    const onNodesClose = () => {
        const nodeEl = document.querySelector(`#${uniqueId} .skill-nodes`);
        const containerEl = nodeEl?.parentElement;
        const clonedNodeEl = nodeEl?.cloneNode(true);

        if (!clonedNodeEl) return; // safeguard

        clonedNodeEl.classList.add("skill-nodes--close");
        clonedNodeEl.addEventListener("animationend", () => {
            containerEl?.removeChild(clonedNodeEl);
        });

        containerEl?.appendChild(clonedNodeEl);
    }
    console.log(branch)
    const [branchName, branchObj] = branch;
    return (
        <div className="skill-branch" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <div className="branch-name">{branchName}</div>
            {<div className="skill-nodes" id={uniqueId}>

                {Object.entries(branchObj.skills).map((skill, index) => (
                    expanded ? <Slider expanded={expanded} duration={500} style={extraStyles}><SkillNode key={index}
                                                                                                         skill={skill}/>
                        </Slider> :
                        <div className="skill-node-placeholder"></div>
                ))}

            </div>}
        </div>
    );
};

export default SkillBranch;
