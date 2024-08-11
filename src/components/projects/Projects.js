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
                <h2 className="py-4 text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl">Projects</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={`project${index}`}
                             className="card glass card-normal h-full bg-gradient-to-t from-orange-300/10 via-yellow-300/10 to-purple-300/10-accent w-96 shadow-xl hover:shadow-none transition-shadow duration-300">
                            <figure className="h-1/2">
                                <img
                                    src={`/images/${project.images[0]}${project.images[0] === "typeBfull" || project.images[0] === "d20" ? '.png' : '.JPG'}`}
                                    alt={project.images[0]} className="w-fit "/>
                            </figure>
                            <div className="card-body text-left h-1/2">
                                <h2 className="card-title">
                                    {project.name}
                                </h2>
                                <p>{project.description}</p>
                                <div className="card-actions justify-start">
                                    {project.stack.map((tech, techIndex) => (
                                        <div className="badge badge-outline" key={techIndex}>{tech}</div>
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
