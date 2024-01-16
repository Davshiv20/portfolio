import React from "react";
import portfolio_image from "../assets/portfolio_image.jpeg";
import { AiFillLinkedin } from "react-icons/ai";


const About = () => {
  return (
    <div id="about">
    <div className="w-full bg-white pb-16 px-4">
        
      
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={portfolio_image}
          alt="/shivam"
          className="w-50 h-50 rounded-full mx-auto my-4  ring-4 ring-green-300 dark:ring-green-500"
        />
        <div className="flex flex-col  p-2 justify-center">
          <h1 className="text-[#00df9a] font-bold md:text-6xl sm:text-3xl p-4 mx-4">
            About Me!
          </h1>
          <p className="p-4 mx-4 text-xl">
            Greetings! I'm a pre-final year student at VIT Vellore, pursuing
            Bachelor's degree in Computer Science with specialization in 
            Bioinformatics. Aspiring to become a proficient front-end developer,
            I thrive on challenges and perpetually seek avenues for
            self-improvement. I firmly believe in the transformative power of
            collaborations and harbor a profound interest in the art of
            problem-solving.

            
          </p>
        <div className="flex justify-center items-center">
        
        <button className='bg-black flex items-center rounded-md w-[150px] font-medium text-xl px-3 py-3 text-[#00df9a] md:mx-0 gap-4 hover:scale-125 duration-300' >
  LinkedIn<a href="https://www.linkedin.com/in/shivam-dave2003/" target="_blank" rel="noopener noreferrer">
     <AiFillLinkedin size={40} className="mx-auto " />
  </a>
</button>
        </div>
          
    
        </div>
       
      </div>
      
      
    </div>
   
        </div>
    
  );
};

export default About;
