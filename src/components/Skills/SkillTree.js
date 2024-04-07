import React from 'react';
import './SkillTree.css';
import SkillBranch from "./SkillBranch"; // Import CSS file for styling

const SkillTree = ({data}) => {
    const renderBranches = () => {
        return Object.entries(data).map((branch, index) => (
            branch[0] !== "Languages" ? <SkillBranch key={index} branch={branch}/> : null
        ));
    };

    return <div className="skill-tree">{renderBranches()}</div>;
};

export default SkillTree;
