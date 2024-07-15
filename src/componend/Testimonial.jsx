import React from 'react'
import img from "/src/image/img.jpg"
function Testimonial() {
  return (
    <div className="bg-gray-500 text-white py-12 px-6 lg:px-24 flex flex-col lg:flex-row items-center">
    <div className="lg:w-1/2">
      <h2 className="text-3xl font-bold text-slate-950 mb-4">Testimonial</h2>
      <p className="mb-4">
      The technical proficiency, problem-solving skills, and dedication are absolutely excellent. I provide web development services to all my clients, knowing that whatever they require, I will be able to deliver robust and efficient solutions. My clients appreciate the high-quality code, timely deliveries, and clear documentation, making their projects successful and their businesses thrive."
      </p>
      <p className="font-bold">Gulam Mustafa</p>
      <p className="text-yellow-500">Java Developer</p>
    </div>
    <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
      <img src={img} alt="Josef Sharon" className="rounded-full h-72 shadow-lg" />
    </div>
  </div>
);
};

export default Testimonial
