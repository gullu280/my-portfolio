import React from 'react'

import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaNodeJs, FaReact, FaGitAlt, FaGithub, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiPostman, SiHibernate, SiNetlify, SiMysql } from 'react-icons/si';


function Skills() {
    const skills = [
        { name: 'HTML', icon: <FaHtml5 /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Spring Boot', icon: <SiSpringboot /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'Hibernate', icon: <SiHibernate /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Netlify', icon: <SiNetlify /> },
        { name: 'MySQL', icon: <SiMysql /> },
      ];
      
  return (
    <div className=" bg-gray-700 p-3 text-yellow-300">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-4 gap-3   ">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center px-7 bg-gray-800  rounded-full p-3 shadow-md">
            <div className="text-3xl mb-2 ">{skill.icon}</div>
            <h3 className="text-lg">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills
