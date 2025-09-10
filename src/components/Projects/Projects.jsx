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
                className='text-3xl md:text-4xl text-gray-500 text-center font-bold mb-4'>
                My <span className='text-primary'>Projects</span>
            </h1>
            <p data-aos="zoom-in-up" data-aos-duration="1000" className='text-center mb-7 text-gray-400'>Some Of my Favorite Work</p>
            {/* projects */}
            <div className="grid grid-cols-1 gap-8 h-full">
                {projects.map((project) => (
                    <div
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        key={project.id}
                        className="card grid lg:grid-cols-2 bg-base-800 shadow-md border border-gray-200 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
                    >
                        {/* Project Image */}
                        <figure className="lg:w-full h-full">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="h-48 w-full object-cover lg:h-full lg:rounded-l-xl"
                            />
                        </figure>

                        {/* Project Content */}
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-semibold text-gray-500">
                                {project.name}
                            </h2>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                {project.details
                                    ? project.details
                                    : "This project is a modern solution designed with a focus on usability and performance. Explore more details to see features, tech stack, and live demo."}
                            </p>

                            <div className="card-actions justify-end mt-4">
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="btn btn-primary px-6"
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