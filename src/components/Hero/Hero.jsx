import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaArrowDown } from "react-icons/fa";
import myImage from "../../assets/Images/my-img4.png";
// import Galaxy from "../../assets/Galaxy/Galaxy";


const Hero = () => {
  return (
    <div>
      <section className="relative bg-gray-800 text-white overflow-hidden lg:min-h-[calc(100vh-80px)]">
        {/* Galaxy Animation */}
        <div className="absolute inset-0 z-0">
          {/* <Galaxy /> */}
        </div>

        {/* Hero Container */}
        <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Left - Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I’m <span className="text-primary">Kousar Ahammed</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
              Passionate about crafting modern web applications with clean code
              and innovative designs. I specialize in building fast, secure, and
              scalable web solutions using the Frontend.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mb-8 text-2xl">
              <a
                href="https://www.linkedin.com/in/md-kousar21/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/kousar-21"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/kousar.ahammed.eshan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4">
              <button className="btn btn-primary px-6">Hire Me</button>
              <button className="btn btn-outline px-6 text-white border-white hover:border-primary hover:text-primary">
                <FaArrowDown />Resume
              </button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-primary opacity-30 rounded-full blur-3xl"></div>
              <img
                src={myImage}
                alt="Kousar Ahammed"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary shadow-lg shadow-primary/50"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;