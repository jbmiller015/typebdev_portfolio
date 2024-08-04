import React, {useEffect, useState} from "react";
import './style/Skills.css';
import data from '../../info/skills.json';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    console.log(skills)

    useEffect(() => {
        setSkills(data);
    }, []);

    return (<div className="skills" id={"SkillsSection"}>
            <div className="container mx-auto p-4">
                <h2 className="py-4 text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">Skills & Tools</h2>

                {Object.entries(skills).map((category, index) => (
                    <section className="mt-6 mb-6 w-full">

                        <div key={index}
                             className="collapse rounded-sm border-y-2 border-purple-100/10">
                            <input type="radio" name="my-accordion-4"/>
                            <div className="collapse-title text-xl font-medium">
                                <h2 className="text-3xl font-bold mb-4">{category[0]}</h2>
                            </div>
                            <div
                                className="collapse-content bg-gradient-to-r from-purple-100/10 via-yellow-200/10 to-green-100/10">
                                <div
                                    className="mt-5 md:mt-0 grid grid-cols-2 custom3:grid-cols-3 sm:grid-cols-4 custom:grid-cols-5 lg:grid-cols-6 xl:grid-cols-rows-7 gap-5 sm:gap-5 w-full justify-center content-center items-center">
                                    {Object.entries(category[1].skills).map((skill, index) => (
                                        <div key={index}
                                             className="card flex glass items-center card-normal w-full h-48 shadow-xl hover:shadow-none transition-shadow duration-200 hover:bg-gradient-to-b from-purple-100/20 via-yellow-300/20 to-green-100/20 transition-color duration-200">
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
                        </div>
                    </section>
                ))}

            </div>
        </div>
    )
        ;
}
export default Skills;
