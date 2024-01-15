import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handlNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex p-4 justify-between items-center h-24 max-w-[2480px] mx-auto text-[#F5EFED] ">
      <h1 className="w-full text-3xl font-bond text-[#00df9a] m-4 ">Hello.</h1>
      <ul className="hidden md:flex ">
        <button className="p-4">Home</button>
        <li className="p-4">About</li>
        <li className="p-4">Skills</li>
        <li className="p-4">Experience</li>
        <li className="p-4">Project</li>

        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handlNav} className="block md:hidden">
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
          <li className="p-4 border-b border-gray-900">Home</li>
          <li className="p-4 border-b border-gray-900">About</li>
          <li className="p-4 border-b border-gray-900">Skills</li>
          <li className="p-4 border-b border-gray-900">Experience</li>
          <li className="p-4 border-b border-gray-900">Project</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
