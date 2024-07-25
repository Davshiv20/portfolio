import React from "react";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaEnvelope,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si"; // Importing the LeetCode icon

const Footer = () => {
  return (
    <div id="contact" className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] py-16">
      <div className="text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#00df9a] mb-4">
          See you Soon.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Contact me
        </h2>
        <p className="text-gray-600 text-lg sm:text-xl p-2">
          Any suggestions or project collaboration requests are welcome!
        </p>
        <p className="text-lg sm:text-xl">
          Feel free to reach out to me at:
          <a
            href="mailto:shivamdave2903@gmail.com"
            className="text-[#00df9a] hover:text-blue-600 ml-2"
          >
            shivamdave2903@gmail.com <FaEnvelope className="inline ml-1" />
          </a>
        </p>
      </div>
      <div className="flex justify-center mt-6 space-x-4 sm:space-x-6">
        <a
          href="https://github.com/Davshiv20"
          className="hover:text-[#00df9a] hover:scale-125 duration-300"
        >
          <FaGithubSquare  size={50}  />
        </a>
        <a
          href="https://www.instagram.com/thevirtualshvm/"
          className="hover:text-[#00df9a] hover:scale-125 duration-300"
        >
          <FaInstagramSquare  size={50}  />
        </a>
        <a
          href="https://leetcode.com/u/Shivam_dave/"
          className="hover:text-[#00df9a] hover:scale-125 duration-300"
        >
          <SiLeetcode size={50}  />
        </a>
      </div>
    </div>
  );
};

export default Footer;
