import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "./Data/constants";

const Skills = () => {
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

  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hover: { scale: 1.1, transition: { duration: 0.5 } },
  };

  return (
    <div className="inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <motion.div
        id="skills"
        className="flex flex-col items-center relative z-1 text-white p-12"
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="relative flex justify-between items-center flex-col w-full max-w-1100 gap-12">
          <motion.div
            className="text-xl font-bold text-center mt-20 md:mt-12 md:text-6xl text-[#00df9a]"
            variants={containerVariants}
          >
            Skills and Stats
          </motion.div>
          <div className="w-full flex flex-wrap mt-10 gap-4 justify-center">
            {skills.map((skillCategory) => (
              <motion.div
                key={skillCategory.title}
                className="w-full max-w-md bg-black border border-[#00df9a] shadow-md rounded-lg p-6 md:max-w-l mx-2 shadow-lg shadow-gray-700"
                whileHover="hover"
                variants={cardVariants}
              >
                <h2 className="text-2xl font-semibold text-secondary mb-3 text-center">
                  {skillCategory.title}
                </h2>
                <div className="flex justify-center flex-wrap gap-4 mb-3">
                  {skillCategory.skills.map((item) => (
                    <div
                      key={item.name}
                      className="text-sm font-normal border border-gray-800 p-2 rounded-lg flex items-center gap-2"
                    >
                      <motion.img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10"
                        whileHover="hover"
                        variants={imageVariants}
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="w-full flex flex-row justify-center items-center gap-4 mt-10">
            <motion.a
              href="https://leetcode.com/u/Shivam_dave"
              whileHover="hover"
              variants={imageVariants}
            >
              <motion.img
                src="https://leetcard.jacoblin.cool/Shivam_dave?theme=dark&font=Space%20Grotesk"
                alt="LeetCode Stats"
                className="max-w-full h-auto"
                whileHover="hover"
                variants={imageVariants}
              />
            </motion.a>
            <motion.a
              href="https://github.com/Davshiv20"
              alt="github-stats-card"
              whileHover="hover"
              variants={imageVariants}
            >
              <motion.img
                src="https://kasroudra-stats-card.onrender.com/user?user=Davshiv20&theme=aura&layout=compact&color=bbadff&hcolor=00df9a"
                className="max-w-full h-auto"
                whileHover="hover"
                variants={imageVariants}
              />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
