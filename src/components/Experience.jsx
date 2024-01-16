import React from 'react'

const Experience = () => {
  return (
    <div id="experience">
   <div className='w-full bg-white flex flex-col items-center relative z-1 text-white p-12 pb-40'>
    <h1 className='mx-auto text-6xl font-bold p-4 text-gray-500 pb-8'>Experience</h1>
    <ol class="relative border-s border-gray-200 dark:border-gray-700">                  
        <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">September 2023-October 2023</time>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-900">Joined Einfochips Ahmedabad as a Tech Intern</h3> 
            <p class="mb-4  text-base font-normal text-gray-500 dark:text-gray-900">Developed a single vendor Food Application as a part of iEnrich Lives initiative by Einfochips on Android Studio.</p>
            <a href="https://drive.google.com/file/d/13vYOjjxI1YOrBPuTBvVA9ahS6BmhUauY/view?usp=drive_link" class="inline-flex items-center px-4 py-2 hover:scale-110 duration-300 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Certificate of Completion <svg class="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg></a>
        </li>
        { <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-xl font-normal leading-none text-gray-400 dark:text-gray-500">July 2023- Current</time>
            <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-900">IEEE ec'Itite Conference Sponsorships Coordinator</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-900">Under Progress</p>
        </li>
        /*
        <li class="ms-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
        </li> */}
    </ol>
</div>
{/* <img
        src={wave_haikei4}
        alt="wave"
        className="w-full"
        /> */}
</div>

  )
}

export default Experience