import React from 'react';
import Typed from 'react-typed';
import wave_haikei_f from "../assets/wave_haikei_f.svg";

const Landing = () => {
  return (
    <div className='text-[#F5EFED]'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] md:text-2xl font-bold sm:text-xl p-2 '>
404: Converting bugs to features</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 md:text-[#F5EFED]  md:pl-4 p-2 py-4'> Shivam Dave</h1>
            <div className='text-xl text-[#F5EFFD] p-4'>
                <p className='md:text-5xl sm:text-4xl fontbold text-gray-500 '>Let's Build Something
                <Typed className='md:text-5xl sm:text-4xl font-bold p-2'
                    strings={['Innovative','Incredible','Fun','Sustainable']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop 
                    />
                 
                 <p>, together.</p>
                 </p>
               
            </div>
        <button className='bg-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto px-4 py-3 text-black hover:scale-110 duration-300'><a href="https://drive.google.com/file/d/1VQXriCYbZRhELbw4RmcyI-1dL8TxvfBN/view?usp=sharing" target="_blank" rel="noopener noreferrer" >Resume</a></button>
        </div>
        <img
        src={wave_haikei_f}
        alt="wave"
        className="w-full"
        />
    </div>
  )
}

export default Landing;