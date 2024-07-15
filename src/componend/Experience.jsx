import React from 'react'

function Experience() {
    const experiences = [
        {
          year: '2023',
          title: 'Reactjs Developer',
          company: 'Freelance work as a web developer,Self-employed  January 2023 – Present',
          description: 'Front-End Development: Implemented a user-friendly front-end design with HTML, CSS, and JavaScript react js Node Js to ensure an excellent user experience.'
        },
        {
          year: '2023',
          title: 'java SpringBoot Developer',
          company: 'Freelance work as a web developer,Self-employed  January 2023 – Present',
          description: 'Full Stack Application Development: Developed a full stack application using  React.js, and Java Spring Boot to enable users to interact with dynamic content.'
        }
      ];
    
    return (
        <div className="p-6 bg-gray-700">
              <h2 className="text-2xl font-bold mb-6">Experiences</h2>
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 p-6 bg-gray-800 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold text-black bg-slate-500 rounded-full px-3">{experience.title}</h2>
              <span className="text-black">{experience.year}</span>
            </div>
            <h3 className="text-lg text-yellow-300">{experience.company}</h3>
            <p className="text-white mt-4">{experience.description}</p>
          </div>
        ))}
      </div>
    );
  };
export default Experience
