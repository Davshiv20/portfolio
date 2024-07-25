import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && isLandingPage) {
        setNav(false); // Close the navbar when scrolled if on landing page
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLandingPage]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Check if the current page is the landing page
    setIsLandingPage(window.location.pathname === "/");
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:items-center p-4 justify-between h-24 max-w-[2480px] mx-auto text-[#F5EFED]">
      <h1 className="text-3xl font-bond text-[#00df9a] m-4">Hello.</h1>
      {isSmallScreen && (
        <>
          <div className="md:hidden transition duration-300 ease-in-out" onClick={() => setNav(!nav)}>
            {!nav ?  <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
          </div>
          <div
            className={` fixed top-40 left-5 h-full backdrop-blur-lg hover:backdrop-blur-lg backdrop-hue-rotate-120a  md:relative md:flex  md:h-auto md:w-auto md:bg-transparent md:ml-auto active:shadow-lg ${
              nav ? "flex" : "hidden"
            } ` }
          >
            <div className="flex flex-col rounded-lg md:flex-row md:items-center ">
              <NavLink to="home"  smooth={true} duration={500} className="p-4 border-white" onClick={() => setNav(false)}>
                Home
              </NavLink>
              <NavLink to="about" smooth={true} duration={500} className="p-4 hover:bg-[#4522a0] rounded-lg"  onClick={() => setNav(false)}>
                About
              </NavLink>
              <NavLink to="skills" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg"  onClick={() => setNav(false)}>
                Skills
              </NavLink>
              <NavLink to="experience" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg"  onClick={() => setNav(false)}>
                Experience
              </NavLink>
              <NavLink to="project" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg"  onClick={() => setNav(false)}>
                Projects
              </NavLink>
              <NavLink to="contact" smooth={true} duration={500} className="p-4 hover:bg-gray-800 rounded-lg"  onClick={() => setNav(false)}>
                Contact
              </NavLink>
            </div>
          </div>
        </>
      )}
      {!isSmallScreen && (
        <div className="md:flex hidden ">
          <NavLink to="home">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="skills">Skills</NavLink>
          <NavLink to="experience">Experience</NavLink>
          <NavLink to="project">Projects</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      )}
    </div>
  );
};

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    smooth={true}
    duration={500}
    className="p-4 ease-in-out duration-500 border-gray-700 hover:bg-[#371b7f] rounded-lg"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
