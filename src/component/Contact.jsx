import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="max-w-4xl mx-auto px-8 py-20 ">
      <h1 className="text-3xl font-semibold text-white mb-8">Contact Me</h1>
      <div>
        <h2 className="text-gray-400 text-lg mb-8">
          Feel free to reach out for internship opportunities
        </h2>
        <div className="flex gap-4 flex-wrap">
          <Link
            className="bg-purple-600 text-white px-6 py-2.5 rounded-lg"
            href="mailto:sonamver274@gmail.com"
          >
            Email
          </Link>
          <Link
            className="border border-gray-600 text-white px-6 py-2.5 rounded-lg"
            href="https://www.linkedin.com/in/sonam-verma-dev"
          >
            LinkedIn
          </Link>
          <Link
            className="border border-gray-600 text-white px-6 py-2.5 rounded-lg"
            href='https://github.com/sonamver274-sketch'
          >
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
