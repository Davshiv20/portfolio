import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex p-4 justify-between items-center h-24 max-w-[2480px] mx-auto text-[#F5EFED]">
      <h1 className="w-full text-3xl font-bond text-[#00df9a] m-4 ">Hello.</h1>
      <ul className="hidden md:flex ">
        <Link to="home" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg">
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg">
          About
        </Link>
        <Link to="skills" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg">
          Skills
        </Link>
        <Link to="experience" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg">
          Experience
        </Link>
        <Link to="project" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg">
          Project
        </Link>
        <Link to="contact" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg">
          Contact
        </Link>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
         !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 block md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bond text-[#00df9a] m-4">Hello.</h1>
        <ul className="uppercase p-4 ">
          <Link to="home" smooth={true} duration={500} className="p-4 border-b border-gray-900 hover:bg-gray-800 rounded-lg">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="p-4 border-b border-gray-900 hover:bg-gray-800 rounded-lg">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="p-4 border-b border-gray-900 hover:bg-gray-800 rounded-lg">
            Skills
          </Link>
          <Link to="experience" smooth={true} duration={500} className="p-4 border-b border-gray-900 hover:bg-gray-800 rounded-lg">
            Experience
          </Link>
          <Link to="project" smooth={true} duration={500} className="p-4 border-b border-gray-900 hover:bg-gray-800 rounded-lg">
            Project
          </Link>
          <Link to="contact" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg">
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
