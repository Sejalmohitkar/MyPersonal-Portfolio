import React from "react";
import Work1 from "../assets/work1.jpeg";
import Work2 from "../assets/work2.jpg";

function Work() {
  const projects = [
    {
      id: 1,
      title: "India-Travel Website",
      description:
        "A modern and visually captivating travel website designed to showcase India's rich culture, destinations, and travel guides with an intuitive and responsive user interface.",
      image: Work1,
      link: "#",
      github: "https://github.com/Sejalmohitkar/India-Travel",
    },
    {
      id: 2,
      title: "Interactive Dashboard",
      description:
        "A dynamic and fully customizable dashboard with real-time analytics, data visualization, and user-friendly navigation for better business insights.",
      image: Work2,
      link: "#",
      github: "https://github.com/Sejalmohitkar/Dashboard",
    },
    {
      id: 3,
      title: "Personal Portfolio",
      description:
        "A sleek and responsive personal portfolio website to showcase skills, projects, and achievements in a creative and professional manner.",
      image: Work1,
      link: "#",
      github: "https://github.com/Sejalmohitkar/MyPersonal-Portfolio",
    },
  ];

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <h2 className="text-4xl text-white underline font-bold text-center mb-12">
          My Work
        </h2>
        <p className="mb-1 text-gray-400 text-center">
          Explore some of my recent projects where I have applied my expertise in web design, UI/UX, and application development to create seamless digital experiences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 shadow-lg rounded-lg overflow-hidden"
            >
              <img src={project.image} className="w-full h-48 object-cover" alt={project.title} />
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <button className="border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition">
                <a href={project.github}></a> View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
