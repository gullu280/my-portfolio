import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {

        const [isOpen, setIsOpen] = useState(false);
      
        const toggleNavbar = () => {
          setIsOpen(!isOpen);
        };
      
  return (
    <nav className="bg-gray-900 p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-3xl font-bold">GM<span className="text-yellow-500">.</span></div>
      <div className="hidden md:block">
        <ul className="flex space-x-4 text-white">
          <li><a href="#work" className="hover:underline">Work</a></li>
          <li><a href="#project" className="hover:underline">Projects</a></li>
          <li><a href="#testimonial" className="hover:underline">Testimonial</a></li>
          <li><a href="#skill" className="hover:underline">Skills</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={toggleNavbar} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden">
        <ul className="flex flex-col space-y-4 mt-4 text-white">
        <li><a href="#work" className="hover:underline">Work</a></li>
          <li><a href="#project" className="hover:underline">Projects</a></li>
          <li><a href="#testimonial" className="hover:underline">Testimonial</a></li>
          <li><a href="#skill" className="hover:underline">Skills</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    )}
  </nav>
);
};


export default NavBar
