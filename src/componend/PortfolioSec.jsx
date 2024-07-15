import React from 'react'

function PortfolioSec() {
  return (
    <div className="bg-gray-800 text-white p-8 md:w-1/3 flex flex-col items-center md:items-start">
    <h1 className="text-4xl font-bold mb-4">Gulam Mustafa<span className="text-yellow-500">.</span></h1>
    <p className="mb-4 text-center md:text-left"> LinkedIn / Naukri / Indeed</p>
    <h1 className="text-4xl text-black font-bold mb-4 text-center md:text-left"><span className='text-2xl '>React/SpringBoot/MYSql,</span><br/> Full Stack Web Developer</h1>
    <a href='#contact' className="bg-yellow-500 hover:bg-yellow-900 font-bold py-2 px-4 text-white rounded">Contact Me</a>
  </div>
);
};

export default PortfolioSec
