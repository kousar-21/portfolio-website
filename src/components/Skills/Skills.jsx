import React, { useState } from 'react';
import {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub
} from "react-icons/fa";
import {
    SiExpress, SiMongodb, SiTailwindcss, SiDaisyui,
    SiNetlify, SiVercel, SiFramer, SiSwiper, SiJavascript
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: "Advanced", type: "frontend" },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: "Advanced", type: "frontend" },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" />, level: "Advanced", type: "frontend" },
    { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: "Advanced", type: "frontend" },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: "Intermediate", type: "backend" },
    { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: "Intermediate", type: "backend" },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400" />, level: "Intermediate", type: "backend" },

    // 🛠 Tools & Libraries
    { name: "Vercel", icon: <SiVercel className="text-white" />, level: "Intermediate", type: "tools" },
    { name: "GitHub", icon: <FaGithub className="text-white" />, level: "Intermediate", type: "tools" },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: "Advanced", type: "frontend" },
    { name: "DaisyUI", icon: <SiDaisyui className="text-teal-400" />, level: "Advanced", type: "frontend" },
    { name: "Netlify", icon: <SiNetlify className="text-teal-400" />, level: "Intermediate", type: "tools" },
    { name: "VS Code", icon: <BiLogoVisualStudio className="text-blue-500" />, level: "Advanced", type: "tools" },
    { name: "Framer Motion", icon: <SiFramer className="text-yellow-400" />, level: "Intermediate", type: "frontend" },
    { name: "Swiper.js", icon: <SiSwiper className="text-blue-500" />, level: "Intermediate", type: "frontend" },
    { name: "AOS Animation", icon: <SiJavascript className="text-yellow-400" />, level: "Intermediate", type: "frontend" }
];

const Skills = () => {
    const [filter, setFilter] = useState("all");
    const [showMore, setShowMore] = useState(false);

    // Filter logic
    let filteredSkills = filter === "all"
        ? skills
        : skills.filter(skill => skill.type === filter);

    // Show More / Show Less logic (only applies when All is selected)
    if (filter === "all" && !showMore) {
        filteredSkills = filteredSkills.slice(0, 8);
    }

    return (
        <section id="Skills" className='px-5 md:px-10 lg:px-20 py-12'>
            <h1
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className='text-3xl md:text-4xl font-bold text-center text-slate-600 mb-8'
            >
                My <span className='text-slate-800'>Skills</span>
            </h1>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {["all", "frontend", "backend", "tools"].map((btn) => (
                    <button
                        key={btn}
                        onClick={() => {
                            setFilter(btn);
                            setShowMore(true); // when filtered, show all relevant items
                        }}
                        data-aos="zoom-in-up" data-aos-duration="1000"
                        className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-300 
              ${filter === btn
                                ? "bg-primary text-white border-primary shadow-lg scale-105"
                                : "bg-white/5 border-white/20 text-gray-400 hover:border-primary hover:text-primary"}`
                        }
                    >
                        {btn.charAt(0).toUpperCase() + btn.slice(1)}
                    </button>
                ))}
            </div>

            {/* Skills Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {filteredSkills.map((skill, index) => (
                    <div
                        data-aos="zoom-in-up" data-aos-duration="1000"
                        key={index}
                        className="group flex flex-col items-center text-center p-6 rounded-2xl 
                       bg-white/5 backdrop-blur-md border border-white/10 
                       hover:border-primary hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        {/* Icon */}
                        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white/10 border border-white/20 mb-4 group-hover:bg-primary/20 transition-all duration-300">
                            <span className="text-5xl">{skill.icon}</span>
                        </div>

                        {/* Name */}
                        <h3 className="text-lg text-gray-400 font-semibold mb-1">{skill.name}</h3>

                        {/* Glow underline */}
                        <div className="w-10 h-1 bg-primary rounded-full group-hover:w-16 transition-all duration-300"></div>
                    </div>
                ))}
            </div>

            {/* Show More / Show Less Button (only for All filter) */}
            {filter === "all" && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="px-6 py-2 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-gray-200 hover:text-primary hover:scale-105 transition-transform duration-300"
                    >
                        {showMore ? "Show Less" : "Show More"}
                    </button>
                </div>
            )}
        </section>
    );
};

export default Skills;
