import React from 'react';
import './SkillTree.css'; // Import CSS file for styling

const SkillNode = ({skill}) => {
    if (!skill) return null; // Added error handling
    return (
        <div className="skill-node">
            <i className={skill.icon.name}></i>
            <div className="skill-details">
                <div className="skill-name">{skill.name}</div>
                <div className="skill-description">{skill.description}</div>
                <div className="skill-exp">{skill.exp?.years || 0} years of experience</div>
                <div className="skill-notes">{skill.exp?.notes || 'No notes available'}</div>
            </div>
        </div>
    );
};

const SkillBranch = ({branch}) => {
    const renderSkills = (skills) => {
        console.log(skills)
        return Object.keys(skills).map((skillName, index) => {

            const skill = skills[skillName];

            if (skill.hasOwnProperty('subcategories')) {
                return (
                    <div key={index} className="nested-skills">
                        <div className="sub-category">{skillName}</div>
                        <div className="nested-skills-container">{renderSkills(skill.subcategories)}</div>
                    </div>
                );
            } else {
                return <SkillNode key={index} skill={skill}/>;
            }
        });
    };

    return (
        <div className="skill-branch">
            <div className="branch-name">{branch.name}</div>
            <div className="skill-nodes">{renderSkills(branch)}</div>
        </div>
    );
};

const SkillTree = ({data}) => {
    const renderBranches = () => {
        return Object.keys(data).map((categoryName, index) => (
            <SkillBranch key={index} branch={{name: categoryName, ...data[categoryName]}}/>
        ));
    };

    return <div className="skill-tree">{renderBranches()}</div>;
};

export default SkillTree;
