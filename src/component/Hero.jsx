import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 py-24">
      <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/40 text-purple-400 text-sm px-4 py-1.5 rounded-full mb-6">
        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
        Open to Internships
      </div>

      <h1 className="text-5xl font-semibold text-white leading-tight mb-4">
        Hi, I'm <span className="text-purple-400">Sonam Verma</span> <br />
        Full Stack web Developer
      </h1>
      <p className="text-gray-400 text-lg max-w-lg mb-8">
        Aspiring Full-Stack Web Developer with hands-on experience building and
        deploying real-world web applications using React, Node.js, and MongoDB.
      </p>

      <div className="flex gap-4">
        <Link href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg transition-colors">
          View Projects
        </Link>
        <a href="/SonamVerma_Resume.pdf" download
          className="border border-gray-600 hover:border-gray-400 text-white px-6 py-2.5 rounded-lg transition-colors">
          Download Resume
        </a>
        
      </div>
    </div>
  );
};

export default Hero;
