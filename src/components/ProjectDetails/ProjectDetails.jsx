import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import projectsData from '../Projects/Projects.json'
// import detailsBG from '../../assets/images/background-2.jpg'

const ProjectDetails = () => {

    const { id } = useParams();
    const project = projectsData.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="text-center text-white mt-20">
                <h2>Project Not Found</h2>
                <Link to="/" className="text-blue-500">Go Back</Link>
            </div>
        );
    }
    return (
        <section className='px-5 md:px-10 lg:px-20 py-10 bg-cover bg-center'>

            <div className="max-w-5xl mx-auto text-white">
                <h1 data-aos="fade-left" data-aos-duration="1000" className="text-3xl md:text-4xl font-bold mb-6">{project.name}</h1>
                <img data-aos="fade-left" data-aos-duration="1000" src={project.image} alt={project.name} className="w-full rounded-lg mb-6" />

                <p data-aos="fade-left" data-aos-duration="1000" className="mb-6 text-slate-600">{project.description}</p>

                <div className="mb-4">
                    <h3 data-aos="fade-left" data-aos-duration="1000" className="font-semibold text-slate-600 text-lg">Tech Stack:</h3>
                    <ul className="flex flex-wrap gap-3 mt-2">
                        {project.stack.map((tech, index) => (
                            <li key={index} data-aos="fade-left" data-aos-duration="1000" className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 data-aos="fade-left" data-aos-duration="1000" className="font-semibold text-lg">Challenges:</h3>
                    <p data-aos="fade-left" data-aos-duration="1000">{project.challenges}</p>
                </div>

                <div className="mb-4">
                    <h3 data-aos="fade-left" data-aos-duration="1000" className="font-semibold text-lg">Future Plans:</h3>
                    <p data-aos="fade-left" data-aos-duration="1000">{project.futurePlans}</p>
                </div>

                <div className="flex gap-4 mt-6">
                    <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700"
                        data-aos="fade-left" data-aos-duration="1000"
                    >
                        Live Project
                    </a>
                    <a
                        href={project.githubClient}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-800"
                        data-aos="fade-left" data-aos-duration="1000"
                    >
                        GitHub Client
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;