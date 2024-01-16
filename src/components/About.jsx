import React from "react";
import portfolio_image from "../assets/portfolio_image.jpeg";
import wave_haikei1 from "../assets/wave_haikei1.svg";


const About = () => {
  return (
    <div>
    <div className="w-full bg-white pb-16 px-4">
        
      
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={portfolio_image}
          alt="/shivam"
          className="w-50 h-50 rounded-full mx-auto my-4  ring-4 ring-green-300 dark:ring-green-500"
        />
        <div className="flex flex-col  p-2 justify-center">
          <h1 className="text-[#00df9a] font-bold md:text-5xl sm:text-3xl p-4 mx-4">
            About Me!
          </h1>
          <p className="p-4 mx-4">
            Greetings! I'm a pre-final year student at VIT Vellore, pursuing
            Bachelor's degree in Computer Science with specialization in 
            Bioinformatics. Aspiring to become a proficient front-end developer,
            I thrive on challenges and perpetually seek avenues for
            self-improvement. I firmly believe in the transformative power of
            collaborations and harbor a profound interest in the art of
            problem-solving.

            
          </p>
        <div className="flex justify-center items-center">
          <button className='bg-black rounded-md w-[200px] font-medium  px-3 py-3 text-[#00df9a]  md:mx-0'>Scroll</button>

        </div>
          
    
        </div>
       
      </div>
      
      
    </div>
   
        </div>
    
  );
};

export default About;
