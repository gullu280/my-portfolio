import React from 'react'
import ProjectData from './ProjectData';
import ProjectCard from './ProjectCard';
function Project() {
  return (
    <section id="projects" className="p-4 bg-gray-500 border-y-2 border-white">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};


export default Project
