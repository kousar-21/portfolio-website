import React, { useEffect, useState } from 'react';
import projectsData from './Projects.json'
import { Link } from 'react-router';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);
    return (
        <section id="Projects" className='px-5 md:px-10 lg:px-20 py-10'>
            <h1 data-aos="zoom-in-up" data-aos-duration="1000"
                className='text-3xl md:text-4xl text-slate-600 text-center font-bold mb-4'>
                My <span className='text-slate-800'>Projects</span>
            </h1>
            <p data-aos="zoom-in-up" data-aos-duration="1000" className='text-center mb-7 text-gray-400'>Some Of my Favorite Work</p>
            {/* projects */}
            <div className="grid grid-cols-1 gap-8">
                {projects.map((project) => (
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        key={project.id}
                        className="card bg-base-800 shadow-md border border-gray-200 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 flex flex-col lg:flex-row"
                    >
                        {/* Project Image */}
                        <figure
                            className="lg:flex-1 h-64 lg:h-auto w-full overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none bg-white/5 flex items-center justify-center"
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </figure>

                        {/* Project Content */}
                        <div className="card-body lg:flex-1 flex flex-col justify-between p-5">
                            <div>
                                <h2 className="card-title text-2xl font-semibold text-slate-800">
                                    {project.name}
                                </h2>
                                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                                    {project.details
                                        ? project.details
                                        : "This project is a modern solution designed with a focus on usability and performance. Explore more details to see features, tech stack, and live demo."}
                                </p>
                            </div>

                            <div className="card-actions justify-end mt-4">
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="btn btn-primary px-6 hover:bg-gray-200 hover:text-primary"
                                >
                                    View More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;