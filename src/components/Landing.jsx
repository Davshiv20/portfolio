import React from "react";
import Typed from "react-typed";
import { motion } from "framer-motion";
import wave_haikei_f from "../assets/wave_haikei_f.svg";
import github from "../assets/github.png";

const Landing = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div>
      <motion.div
        className="inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <motion.p
            className="text-[#00df9a] md:text-2xl font-bold sm:text-xl p-2"
            variants={containerVariants}
          >
            Welcome to my portfolio
          </motion.p>
          <motion.h1
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5EFED] py-2 md:py-6"
            variants={containerVariants}
          >
            Shivam Dave
          </motion.h1>

          <motion.div
            className="text-xl text-[#F5EFFD] p-4"
            variants={containerVariants}
          >
            <p className="md:text-5xl sm:text-4xl font-bold text-gray-500">
              Engineering the Future,
              <Typed
                className="md:text-5xl sm:text-4xl font-bold text-[#00df9a] p-2"
                strings={[
                  "through Full-Stack Solutions.",
                  "with a sharp interest in finance ",
                  "using Language Models.",
                ]}
                typeSpeed={60}
                backSpeed={80}
                loop
              />
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center  mt-6"
            variants={containerVariants}
          >
            <motion.button
              className="bg-[#00df9a] rounded-md w-[200px] font-medium mx-auto px-4 py-3 text-black"
              whileHover="hover"
              variants={buttonVariants}
            >
              <a
                href="https://drive.google.com/file/d/1aYiYv-CtChGs_zWMIEXmhas-I8joCtT6/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </motion.button>
            <motion.button
              className="bg-[#00df9a] rounded-md w-[200px] font-medium mx-auto px-4 py-3 text-black flex items-center justify-center"
              whileHover="hover"
              variants={buttonVariants}
            >
              <a
                href="https://github.com/Davshiv20"
                target="_blank"
                className="flex items-center justify-center"
              >
                <img src={github} alt="GitHub" className="w-6 h-6 mr-2" />
                GitHub
              </a>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
