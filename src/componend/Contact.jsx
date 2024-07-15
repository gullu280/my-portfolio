import React from 'react'
import { FaFacebook , FaInstagramSquare, FaWhatsappSquare,FaTwitter} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";

function Contact() {
  return (
    <div className="bg-gray-800 text-white text-center py-12 px-6 lg:px-24">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6">
        <a className="flex items-center border-2 rounded-full px-3">
        <IoMailOutline color='yellow' />
          <span className='pl-3'>gulaamm786@gmail.com</span>
        </a>
        <button className="flex items-center border-2 rounded-full  px-3 ">
        <IoCallOutline color='yellow' />
          <span className='pl-3' >7903743500</span>
        </button>
        <button className="flex items-center border-2 rounded-full px-3">
        <FaLocationDot color='yellow' />
          <span className='pl-3'>Delhi, India</span>
        </button>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <a href="#" className="text-yellow-500 "><FaFacebook size={30} /></a>
        <a href="#" className="text-yellow-500"><FaTwitter size={30}/></a>
        <a href="#" className="text-yellow-500"><FaInstagramSquare size={30}/></a>
        <a href="#" className="text-yellow-500"><FaWhatsappSquare size={30} /></a>
      </div>
    </div>
  );
};

export default Contact
