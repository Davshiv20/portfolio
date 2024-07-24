import React from "react";
import { motion, useInView } from "framer-motion";
import portfolio_image from "../assets/portfolio_image.jpeg";
import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.7, duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      id="about"
      className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="w-full pb-16 px-4 max-w-[1240px] mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          <motion.img
            src={portfolio_image}
            alt="/shivam"
            className="w-full md:w-50 h-auto rounded-full mx-auto my-4 ring-4 ring-green-300 dark:ring-green-500"
            variants={imageVariants}
          />
          <motion.div
            className="flex flex-col p-2 justify-center"
            variants={textVariants}
          >
            <h1 className="text-[#00df9a] font-bold hover:text-[#43219c] hover:duration-500 md:text-6xl sm:text-4xl text-4xl p-4 mx-4">
              About Me!
            </h1>
            <p className="p-4 mx-4 text-xl">
              Greetings! I'm a fourth-year student at VIT Vellore, pursuing a Bachelor's degree in Computer Science. As a fullstack developer and AWS cloud practitioner with a sharp interest in AI/ML, especially in Language Models (LLMs), I thrive on challenges and perpetually seek avenues for self-improvement. I firmly believe in the transformative power of collaborations and harbor a profound interest in the art of problem-solving.
            </p>
            <div className="flex justify-center items-center">
              <motion.button
                className="bg-black flex items-center rounded-md w-[150px] font-medium text-xl px-3 py-3 text-[#00df9a] md:mx-0 gap-4 hover:scale-125 duration-300"
                whileHover="hover"
                variants={buttonVariants}
              >
                LinkedIn
                <a
                  href="https://www.linkedin.com/in/shivam-dave2003/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin size={40} className="mx-auto " />
                </a>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
