import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "Advanced" },
    { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: "Advanced" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate" },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: "Intermediate" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: "Intermediate" },
];

const Skills = () => {
    return (
        <section id="Skills" className='px-5 md:px-10 lg:px-20 py-12'>
            <h1 className='text-3xl md:text-4xl font-bold text-center text-gray-500 mb-5'>My <span className='text-primary'>Skills</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        {/* Icon container */}
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 border border-white/20 mb-4 group-hover:bg-primary/20 transition-all duration-300">
                            <span className={`text-5xl ${skill.color}`}>{skill.icon}</span>
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>

                        {/* Glow underline */}
                        <div className="w-10 h-1 bg-primary rounded-full group-hover:w-16 transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;