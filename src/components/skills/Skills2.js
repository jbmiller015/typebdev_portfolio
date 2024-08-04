import React, {useEffect, useState} from "react";
import './style/Skills.css';
import data from '../../info/skills.json';

const Skills2 = () => {
    const [skills, setSkills] = useState([]);
    console.log(skills)

    useEffect(() => {
        setSkills(data);
    }, []);

    return (<div className="skills2" id={"SkillsSection"}>
        <div className="container mx-auto h-full p-4">
            <h2 className="py-4 text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">Skills & Tools</h2>
            <div role="tablist" className="tabs tabs-lifted w-full">
                {Object.entries(skills).map((category, index) => (
                    [
                        <input type="radio" name={`my_tabs`} role="tab"
                               className="tab w-full text-nowrap"
                               aria-label={category[0]}/>,
                        <div role="tabpanel"
                             className="tab-content border-base-300 rounded-box p-6 h-[32rem] w-full justify-self-start">
                            <div
                                className="mt-5 md:mt-0 flex flex-wrap w-full h-full place-content-center">
                                {Object.entries(category[1].skills).map((skill, index) => (
                                    <div key={index}
                                         className="card flex glass items-center card-normal m-1 w-48 h-48 shadow-xl hover:shadow-none transition-shadow duration-200 hover:bg-gradient-to-b from-purple-100/20 via-yellow-300/20 to-green-100/20 transition-color duration-200">
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
