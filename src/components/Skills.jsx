import React from "react";
import { skills } from "./Data/constants";

const Skills = () => {
  return (
    <div className="inset-0 -z-10 h-full w-full items-center py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div
        id="skills"
        className="flex flex-col items-center relative z-1 text-white p-12 "
      >
        <div className="relative flex justify-between items-center flex-col w-full max-w-1100 gap-12">
          <div className="text-xl font-bold text-center mt-20 md:mt-12 md:text-6xl text-[#00df9a]">
            Skills and Stats
          </div>
          {/* <div className="text-2xl text-center max-w-2xl text-gray-400">
          
          </div> */}
          <div className="w-full flex flex-wrap mt-10 gap-4 justify-center">
            {skills.map((skillCategory) => (
              <div
                key={skillCategory.title}
                className="w-full max-w-md bg-black border hover:scale-105 hover:duration-700 border-[#00df9a] shadow-md rounded-lg p-6 md:max-w-l mx-2 shadow-lg shadow-gray-700"
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
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10"
                      />
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-row  justify-center items-center ">
            <a href="https://leetcode.com/u/Shivam_dave">
              <img
                src="https://leetcard.jacoblin.cool/Shivam_dave?theme=dark&font=Space%20Grotesk"
                alt="LeetCode Stats"
                className="max-w-full h-auto hover:scale-105 hover:duration-500"
              />
            </a>
            <a href="https://github.com/Davshiv20" alt="github-stats-card">
              <img
                src="https://kasroudra-stats-card.onrender.com/user?user=Davshiv20&theme=aura&layout=compact&color=bbadff&hcolor=00df9a"
                className="max-w-full h-auto hover:scale-105 hover:duration-500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
