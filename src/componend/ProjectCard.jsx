import React from 'react'

function ProjectCard({ title, description, image, link }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-2xl bg-gray-400 ">
    <img className="w-full h-56 " src={image} alt={title} />
    <div className="px-6 py-4 bg-gray-800 ">
      <span className="font-bold text-xl  bg-gray-500 rounded-full px-3 ">{title}</span>
      <p className=" text-base text-white mt-4">
        {description}
      </p>
    </div>
    <div className="px-6 pt-4 pb-2 bg-gray-800">
      <a href={link} className="bg-yellow-500 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded">
        View Project
      </a>
    </div>
  </div>
);
};

export default ProjectCard
