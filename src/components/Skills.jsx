import React from 'react';
import { skills } from './Data/constants';


const Skills = () => {
  return (
    <div>
    <div id="skills" className="flex flex-col items-center relative z-1 text-white p-12 ">
      <div className="relative flex justify-between items-center flex-col w-full max-w-1100 gap-12">
        <div className="text-xl font-bold text-center mt-20 md:mt-12 md:text-6xl text-[#00df9a]">
          Skills
        </div>
        <div className="text-2xl text-center max-w-2xl text-gray-400">
          Here are some of my skills on which I have been working for the past 1 year.
        </div>
        <div className="w-full flex flex-wrap mt-10 gap-4 justify-center"> {/* Reduced the gap for more compact cards */}
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full max-w-md bg-black border border-[#00df9a] shadow-md rounded-lg p-6 md:max-w-l mx-2 shadow-lg shadow-gray-700" // Adjusted padding and margin
            >
              <h2 className="text-2xl font-semibold text-secondary mb-3 text-center">
                {skill.title}
              </h2>
              <div className="flex justify-center flex-wrap gap-4 mb-3"> {/* Reduced the gap for more compact skills */}
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="text-sm font-normal border border-gray-800 p-2 rounded-lg flex items-center gap-2"
                  >
                    <img src={item.image} alt={item.name} className="w-10 h-10" /> 
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* <img
        src={wave_haikei2}
        alt="wave"
        className="w-full"
        /> */}
        </div>
  );
};

export default Skills;
