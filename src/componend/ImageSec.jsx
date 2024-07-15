import React from 'react'

function ImageSec({ imageUrl }) {
  return (
    <div className="bg-gray-800  text-white p-11 md:w-1/3 flex flex-col items-center md:items-start">
    <div className="flex justify-center items-center p-8">
    <img className="max-w-full h-auto rounded-full  shadow-lg" src={imageUrl} alt="Portfolio showcase" />
  </div>
  </div>
);
};


export default ImageSec
