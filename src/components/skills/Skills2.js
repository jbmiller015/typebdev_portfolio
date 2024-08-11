import React, {useEffect, useState} from "react";
import './style/Skills.css';
import data from '../../info/skills.json';
import SkillsModal from "./SkillModal";

const Skills2 = () => {
    const [skills, setSkills] = useState([]);

    const [active, setActive] = useState(0);

    const [modalSkills, setModalSkills] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setSkills(data);
    }, []);


    const handleCardClick = (skill, e) => {
        setModalSkills(skill);
        setShowModal(true);
    }

    return (<div className="skills2" id={"SkillsSection"}>
        <div className="container mx-auto h-full p-4">
            <h2 className="py-4 text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">Skills & Tools</h2>
            {showModal ? <SkillsModal data={modalSkills} setShowModal={setShowModal}/> : null}
            <div role="tablist" className="tabs tabs-lifted w-full">
                {Object.entries(skills).map((category, index) => (
                    [
                        <input type="radio" name={`my_tabs`} role="tab"
                               className={`tab w-full text-nowrap ${index === active ? 'tab-active' : ''}`}
                               aria-label={category[0]} key={`input${index}`} onClick={() => setActive(index)}/>,
                        <div role="tabpanel"
                             className={`tab-content overflow-scroll border-base-300 rounded-box p-6 h-[32rem] w-full justify-self-start`}
                             key={`tab${index}`}>
                            <div
                                className="mt-5 md:mt-0 flex flex-wrap w-full h-full place-content-center">
                                {Object.entries(category[1].skills).map((skill, index) => (
                                    <div key={index} onClick={(event) => handleCardClick(skill, event)}
                                         className="card flex glass items-center card-normal cursor-pointer m-1 w-48 h-48 shadow-xl hover:shadow-none transition-shadow duration-200 hover:bg-gradient-to-b from-purple-100/20 via-yellow-300/20 to-green-100/20 transition-color duration-200">
                                        <div className="card-body text-center">
                                            <h2 className="card-title">
                                                {skill[0]}
                                            </h2>
                                        </div>
                                        <figure className="h-1/2">
                                            <div
                                                className="text-6xl bg-gradient-to-l from-purple-900 via-green-900 to-yellow-900 inline-block text-transparent bg-clip-text flex justify-center items-center mb-6 mx-auto">
                                                <i className={skill[1].icon ? skill[1].icon.name : ""}></i>
                                            </div>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ]))}
            </div>

        </div>
    </div>);
}
export default Skills2;
