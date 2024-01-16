import React from 'react'

import{
   FaGithubSquare,
   FaInstagramSquare,
   FaTwitterSquare,
   FaPinterestSquare,
   FaLinkedinIn,

}from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='max-width-[1240px] bg-white text-black mx-auto py-16 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h1 className="w-full text-5xl font-bond text-[#00df9a] m-4  ">Goodbye.</h1>
        </div>
        <div className='flex items-center mx-auto justify-between  md:w-[75%] my-6 '>
            <a href="https://github.com/Davshiv20" className="hover:text-[#00df9a] hover:scale-125 duration-300">
            <FaGithubSquare size={60}/> </a>
            <a href='https://www.instagram.com/thevirtualshivam/' className="hover:text-[#00df9a] hover:scale-125 duration-300">
            <FaInstagramSquare size={60}/></a>
            <a href='' className="hover:text-[#00df9a] hover:scale-125 duration-300">
                          <FaTwitterSquare size={60} /></a >
        </div>
    </div>
  )
}

export default Footer