import React, {useState, useEffect} from 'react';
import './style/Project.css';
import data from '../../info/projects.json';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data.projects);
    }, []);
    return (
        <div className="project" id={"ProjectsSection"}>
            <div className="container mx-auto p-4">
                <h2 className="py-4 text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">Resume</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                    alt="Shoes"/>
                            </figure>
                            <div className="card-body text-white">
                                <h2 className="card-title">
                                    {project.name}
                                </h2>
                                <p>{project.description}</p>
                                <div className="card-actions justify-end">
                                    {project.stack.map((tech, techIndex) => (
                                        <div className="badge badge-outline"> key={techIndex}>{tech}</div>
                                    ))}

                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
