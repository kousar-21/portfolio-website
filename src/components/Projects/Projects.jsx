import React, { useEffect, useState } from 'react';
import projectsData from './Projects.json'
import { Link } from 'react-router';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);
    return (
        <section className='px-5 md:px-10 lg:px-20 py-10'>
            <h1 data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className='text-3xl md:text-4xl text-center font-bold mb-4'>
                My <span className='text-primary'>Projects</span>
            </h1>
            <p className='text-center mb-7'>Some Of my Favorite Work</p>
            {/* projects */}
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6">
                {projects.map((project) => (
                    <div
                        data-aos="zoom-in-up"
                        data-aos-easing="linear"
                        data-aos-duration="1500"
                        key={project.id}
                        className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                    >
                        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                            <Link
                                to={`/projects/${project.id}`}
                                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                View More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;