import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div id="projects" className="max-w-4xl mx-auto px-8 py-20">
      
      <h1 className="text-3xl font-semibold text-white mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-white text-xl font-semibold mb-3">LinkedIn Clone</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A full-stack LinkedIn-inspired platform with JWT auth, posts,
            connections, messaging, and a job portal.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">JWT</span>
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">Cloudinary</span>
          </div>
          <div className="flex gap-3">
            <Link className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              href="https://linkedin-frontend-ibky.onrender.com">
              Live Demo
            </Link>
            <Link className="border border-gray-600 hover:border-gray-400 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              href="https://github.com/sonamver274-sketch/linkedin-frontend">
              GitHub
            </Link>
          </div>
        </div>
        <div className="border border-gray-800 rounded-xl p-6">
          <h2 className="text-white text-xl font-semibold mb-3">JobFlow</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            A full-stack job board where employers post jobs and seekers can
            apply, track status, and get accepted or rejected — with role-based JWT auth.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">React.js</span>
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">JWT</span>
            <span className="bg-purple-900/30 text-purple-400 text-xs px-3 py-1 rounded-full">Express.js</span>
          </div>
          <div className="flex gap-3">
            <Link className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              href="https://job-board-fr.onrender.com">
              Live Demo
            </Link>
            <Link className="border border-gray-600 hover:border-gray-400 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              href="https://github.com/sonamver274-sketch/Job_Board_Fr">
              GitHub
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;