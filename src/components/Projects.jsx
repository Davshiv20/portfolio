import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import developer from "../assets/developer.png";
import Lup from "../assets/Lup.jpeg";
import tic_tac_toe from "../assets/tic_tac_toe.png";
import fav from "../assets/favicon.png";
import pet from "../assets/pet.png";
import kaabil from "../assets/kaabil.png"; // Assuming you have an image for Kaabil.me

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: { scale: 1.05, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="project"
      className="inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"
    >
      <motion.div
        className="w-full flex flex-col items-center relative z-1 text-white p-12"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h1
          className="font-bold text-xl md:text-6xl text-[#00fd9a] text-center p-12"
          variants={containerVariants}
        >
          Projects and Work
        </motion.h1>
        <div className="w-full py-[2rem] px-4 text-white">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-12">
            {/* Project Cards */}
            {[
              {
                img: developer,
                title: "Health Nectar",
                description: "A Single Vendor Food Ordering App",
                techStack: "Android Studio, Figma, Firebase, Java",
                learnings: [
                  "User Authentication implemented.",
                  "Connected with Firebase using its database as backend.",
                  "Learned Designing in XML format and made it two-way for both customers and admin.",
                ],
                repoLink: "https://github.com/Davshiv20/FoodDeliveryapp",
              },
              {
                img: Lup,
                title: "ListenUp",
                description: "An Online Podcast Streaming App",
                techStack: "Reactjs, Figma",
                learnings: [
                  "Designing UI in Figma.",
                  "State Management.",
                  "Adding Animations to the UI.",
                ],
                repoLink: "https://github.com/Davshiv20/ListenUp",
                liveLink: "https://ethnus-project-frontend.vercel.app/",
              },
              {
                img: tic_tac_toe,
                title: "Tic-Tac-Toe",
                description: "Two Player Tic-Tac-Toe",
                techStack: "Reactjs",
                learnings: [
                  "State Management (Lifting State).",
                  "Implementing Two-Way Binding.",
                  "Asynchronous and Dynamic Data Visibility.",
                ],
                repoLink: "https://github.com/Davshiv20/tic-tac-toe",
                liveLink: "https://tic-tac-toe-rho-black.vercel.app/",
              },
              {
                img: fav,
                title: "Portfolio App",
                description: "Portfolio website made by me",
                techStack: "Reactjs, TailwindCSS, Vercel",
                learnings: [
                  "Framer Motion.",
                  "Tailwind Advanced Features.",
                  "State Management and asynchronous JS.",
                ],
                repoLink: "https://github.com/Davshiv20/portfolio",
                liveLink: "https://shvm.vercel.app/",
              },
              {
                img: pet,
                title: "Pawlytics",
                description: "Pet Care Application",
                techStack: "Reactjs, Firebase, TailwindCSS, Vercel",
                learnings: [
                  "Customer and Admin side interface with Responsiveness.",
                  "CRUD features and Order Cart functionality.",
                  "Admin Side server and User Handling.",
                ],
                repoLink: "https://github.com/Davshiv20/Pawlytics",
                liveLink: "https://pawlytics.vercel.app/",
              },
              {
                img: kaabil,
                title: "Kaabil.me",
                description: "An Online Skill Development Platform",
                techStack: "Reactjs, Node.js, Express, MongoDB",
                learnings: [
                  "Full Stack Development.",
                  "User Authentication and Authorization.",
                  "RESTful API Design.",
                  "Responsive UI Design.",
                ],
                repoLink: "https://github.com/Davshiv20/Kaabil.me",
                liveLink: "https://kaabil.me",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="w-full shadow-lg border-2 border-gray-500 shadow-[#00df9a] flex flex-col p-4 my-4 rounded-lg"
                variants={cardVariants}
                whileHover="hover"
              >
                <img
                  className="w-20 mx-auto mt-[-3rem]"
                  src={project.img}
                  alt={project.title}
                />
                <h2 className="text-2xl font-bold text-center py-8">
                  {project.title}
                </h2>
                <p className="flex justify-center text-gray-400 font-semibold p-4">
                  {project.description}
                </p>
                <div className="text-center">
                  <div className="rounded-lg">
                    <p className="font-bold text-xl text-gray-200 py-6">
                      Tech Stack
                    </p>
                    <p className="text-[#00df9a]">{project.techStack}</p>
                  </div>
                  <h1 className="text-xl font-bold py-6">Learnings</h1>
                  <ul className="list-disc list-inside mx-8 py-3 space-y-2">
                    {project.learnings.map((learning, i) => (
                      <li key={i}>{learning}</li>
                    ))}
                  </ul>
                  <div className="flex flex-col mx-auto w-40 gap-2 p-2">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#00f9da] bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      Github Repo
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
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#00f9da] bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                      >
                        Live
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
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
