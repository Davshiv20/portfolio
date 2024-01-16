import React from "react";
import developer from "../assets/developer.png";

const Projects = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-black text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-lg border-2 border-gray-500 shadow-[#00df9a] flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem]"
            src={developer}
            alt="HEALTH NECTAR"
          />

          <h2 className="text-2xl font-bold text-center py-8 ">
            Health Nectar
          </h2>
          <p className="flex justify-center font-semibold p-4">
            A Single Vendor Food Ordering App
          </p>
          <div className="text-center ">
            <div className=" rounded-lg">
            <p className="font-bold  text-xl text-gray-200">Tech Stack</p>
            <p className="text-gray-600">Android Studio, Figma, Firebase, Java</p>
            </div>
            <h1 className="text-xl font-bold" >Learnings</h1>
            <p className="py-2  mx-8 bt-8">
              User Authentication implemented.
            </p>
            <p className="py-2 mx-8 bt-8">Connected with Firebase</p>
            <p className="py-2 mx-8 bt-8">
              Usable for admin as well as customers
            </p>
            <a
              href="https://github.com/Davshiv20/FoodDeliveryapp"
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-[#00f9da] bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Github Repo{" "}
              <svg
                class="w-3 h-3 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
