import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      id="experience"
      className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
    >
      <motion.div
        className="w-full flex flex-col items-center relative z-1 text-white p-12 pb-40"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          className="mx-auto text-6xl font-bold p-4 text-[#00df9a] pb-8"
          variants={itemVariants}
        >
          Experience
        </motion.h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <motion.li className="mb-10 ms-4" variants={itemVariants}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              September 2023-October 2023
            </time>
            <h3 className="text-2xl font-semibold text-[#009dfa] dark:text-gray-900">
              Worked at Einfochips, Ahmedabad as a Tech Intern
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-900">
              Developed a single vendor Food Application as a part of iEnrich Lives initiative by Einfochips on Android Studio.
            </p>
            <a
              href="https://drive.google.com/file/d/1gAtZZ15kTmoOzg1yxfTAFeto1I6Ma_0M/view?usp=sharing"
              className="inline-flex items-center px-4 py-2 hover:scale-110 duration-300 text-sm font-medium text-gray-200 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certificate of Completion
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </motion.li>
          <motion.li className="mb-10 ms-4" variants={itemVariants}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2024- July 2024
            </time>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-900">
              Worked at Kaabil.me as a Full-Stack Dev
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-900">
              Led the FrontEnd development at Kaabil.me, which is an IIMA-backed Startup to revolutionalize teaching.
            </p>
            <a
              href="https://drive.google.com/file/d/1uWuYWLUbE0PUYIsy8PuRoVPQd0E_M_-g/view?usp=sharing"
              className="inline-flex items-center px-4 py-2 hover:scale-110 duration-300 text-sm font-medium text-gray-200 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Offer Letter
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </motion.li>
          {/* Uncomment and add more experiences as needed */}
          {/* <motion.li className="ms-4" variants={itemVariants}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
          </motion.li> */}
        </ol>
      </motion.div>
      {/* <img src={wave_haikei4} alt="wave" className="w-full" /> */}
    </div>
  );
};

export default Experience;
