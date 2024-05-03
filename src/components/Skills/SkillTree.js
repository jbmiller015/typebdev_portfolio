import React from 'react';
import './SkillTree.css';
import SkillBranch from "./SkillBranch";

const SkillTree = ({data}) => {
    const renderBranches = () => {

        //const keyCount = Object.keys(data).length;
        const treeCardCounts = [1, 2, 3, 2, 2];
        const treeShape = [];
        const treeBranches = Object.entries(data).map((branch, index) => (branch[0] !== "Languages" ?
            <SkillBranch key={index} branch={branch}/> : null));
        treeShape.push(<div className={'branch-layer'}>{treeBranches.slice(1, 2)}</div>);
        treeShape.push(<div className={'branch-layer'}>{treeBranches.slice(2, 4)}</div>);
        treeShape.push(<div className={'branch-layer'}>{treeBranches.slice(4, 7)}</div>);
        treeShape.push(<div className={'branch-layer'}>{treeBranches.slice(7, 9)}</div>);
        treeShape.push(<div className={'branch-layer'}>{treeBranches.slice(9, 10)}</div>);
        treeShape.push(<div className={'branch-layer'}>{treeBranches.slice(10, 11)}</div>);
        return treeShape;
    };


    return (
        <div className={'skill-tree-section'}>
            <h2>Skill Tree</h2>
            <div className="skill-tree">{renderBranches()}</div>
        </div>);
};

export default SkillTree;
