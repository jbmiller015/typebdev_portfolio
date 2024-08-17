import React, {useEffect, useState} from "react";
import './style/Skills.css';
import data from '../../info/skills.json';
import SkillsModal from "./SkillModal";
import * as PropTypes from "prop-types";

function SkillCards({skill, onClick}) {
    return (
        <>
            {Object.entries(skill.skills).map((skill, index) =>
                <div onClick={() => onClick(skill)}
                     className="card overflow-visible flex flex-col items-center justify-center glass w-40 sm:w-44 md:w-48 lg:w-52 h-40 sm:h-44 md:h-48 lg:h-52 cursor-pointer shadow-xl hover:shadow-none transition-shadow duration-300 hover:bg-gradient-to-b from-purple-100/20 via-yellow-300/20 to-green-100/20">
                    <div className="card-body text-center overflow-visible pb-2">
                        <h2 className="card-title text-base sm:text-lg md:text-xl lg:text-2xl">
                            {skill[0]}
                        </h2>
                    </div>
                    <figure className="h-1/2">
                        <div
                            className="text-4xl overflow-auto sm:text-5xl md:text-6xl bg-gradient-to-l from-purple-900 via-green-900 to-yellow-900 inline-block text-transparent bg-clip-text flex justify-center items-center mb-4 sm:mb-6 mx-auto"
                        >
                            <i className={skill[1].icon ? skill[1].icon.name : ""}></i>
                        </div>
                    </figure>
                </div>
            )}

        </>
    );
}

SkillCards.propTypes = {
    onClick: PropTypes.func,
    skill: PropTypes.any
};
const Skills2 = () => {
    const [skills, setSkills] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Languages");
    const [modalSkills, setModalSkills] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setSkills(data);
    }, []);

    const handleCardClick = (skill) => {
        setModalSkills(skill);
        setShowModal(true);
    };

    const handleCategoryChange = (index) => {
        setActiveCategory(index);
    };

    return (
        <div className="skills2" id="SkillsSection">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 h-[44rem] sm:h-dvh">
                <h2 className="py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                    Skills & Tools
                </h2>
                {showModal && <SkillsModal data={modalSkills} setShowModal={setShowModal}/>}

                <div
                    className="flex flex-wrap flex-row gap-2 justify-center sm:justify-left space-x-4 mb-8 overflow-x-scroll scroll-smooth ">
                    {Object.keys(skills).map((category, index) => (
                        <button
                            key={index}
                            onClick={() => handleCategoryChange(category)}
                            className={`px-4 py-2 text-nowrap text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-lg transition-colors duration-500 ${
                                activeCategory === category
                                    ? "bg-gradient-to-r from-purple-900 via-yellow-900 to-green-900 text-white"
                                    : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div
                    className="flex flex-wrap flex-row justify-center py-8 gap-4 w-full h-3/5 sm:w-full sm:h-80 md:h-96 lg:h-[32rem] overflow-y-scroll scroll-smooth border-2 border-gray-600">
                    {Object.entries(skills).filter((skill, index) => (skill[0] === activeCategory)).map((skill, index) => (
                        <SkillCards key={index} onClick={handleCardClick} skill={skills[skill[0]]}/>
                    ))}
                </div>
            </div>
        </div>
    )
        ;
}

export default Skills2;
