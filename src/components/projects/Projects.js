import React, {useState, useEffect} from 'react';
import './style/Project.css';
import data from '../../info/projects.json';

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data.projects);
    }, []);

    const getImgSrc = (imgSrc) => {
        if (imgSrc && imgSrc.includes('http')) {
            return imgSrc;
        } else if (imgSrc)
            return `/images/${imgSrc}${imgSrc === "typeBfull" || imgSrc === "d20" || imgSrc === "mini_twit" ? '.png' : '.JPG'}`;
    }

    return (
        <div className="project" id="ProjectsSection">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <h2 className="py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                    Projects
                </h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={`project${index}`}
                             className="card glass card-normal h-full bg-gradient-to-t from-orange-300/10 via-yellow-300/10 to-purple-300/10 w-full sm:w-auto shadow-xl hover:shadow-none transition-shadow duration-300">
                            <figure className="h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96">
                                <img
                                    src={getImgSrc(project.images[0])}
                                    alt={project.images[0]}
                                    className="w-fit h-fit object-cover"
                                />
                            </figure>
                            <div className="card-body text-left">
                                <h2 className="card-title text-lg sm:text-xl md:text-2xl lg:text-3xl">
                                    {project.name}
                                </h2>
                                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                                    {project.description}
                                </p>
                                <div className="card-actions justify-start flex-wrap gap-2">
                                    {project.stack.map((tech, techIndex) => (
                                        <div className="badge badge-outline text-xs sm:text-sm md:text-base lg:text-lg"
                                             key={techIndex}>
                                            {tech}
                                        </div>
                                    ))}
                                </div>
                                <div className="divider"></div>
                                <div className="card-actions justify-start flex-wrap gap-2">
                                    {project.site && project.site.length > 1 ? <button
                                        className="badge badge-outline text-md sm:text-lg md:text-lg lg:text-xl hover:bg-gradient-to-r from-green-900 via-yellow-900 to-purple-900 p-4 hover:text-white"
                                        onClick={() => window.open(project.site)}>
                                        Demo
                                    </button> : null}
                                    {project.repo && project.repo.length > 1 ? <button
                                        className="badge badge-outline text-md sm:text-lg md:text-lg lg:text-xl hover:bg-gradient-to-r from-green-900 via-yellow-900 to-purple-900 p-4 hover:text-white"
                                        onClick={() => window.open(project.repo)}>
                                        Repo
                                    </button> : null}
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
