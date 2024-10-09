import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GoRocket } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";

export default function LandingService() {
  return (
    <div>
      <div
        className="h-full w-full "
        style={{ backgroundImage: "url('/images/background1.jpg')" }}
      >
        <div className="flex  justify-center items-center md:py-28 py-14 flex-col">
          <h1 className="text-5xl text-secondary font-extrabold shadow-md rounded-full p-2  my-6">
            Services
          </h1>
          <nav className="flex" aria-label="Breadcrumb">
            <div className="inline-flex items-center space-x-1 md:space-x-3">
              <div className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  Home
                </a>
                <IoIosArrowForward />
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600 "
                >
                  Service
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="bg-gray-50 md:py-16 py-8 md:px-20 px-12 font-montserrat">
        <div>
          <div className="flex items-center justify-start space-x-4 mb-4">
            <button className="bg-white border border-gray-200 text-green-600 rounded-full px-4 shadow-lg p-2 text-xs font-semibold">
              <span className="inline-flex items-center justify-center  h-2 w-2 bg-green-500 rounded-full mr-1"></span>
              START NOW
            </button>
          </div>
          <div className="flex justify-between md:flex-row flex-col ">
            <h2 className="text-4xl font-bold text-start mb-8">
              Explore How can I help you
            </h2>
            <p className="text-base md:w-1/2 pb-10 text-gray-400">
              When you come to coaching or counseling, we work with you, your
              situation / issue and together we find the best solution for you.
              All the tools we will use, you will be able to apply later in
              life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-blue-100 w-16 h-16 items-center flex justify-center transition duration-300 hover:bg-secondary rounded-full">
                <GoRocket size={40} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Motivate</h3>
            <p className="text-gray-600 mb-4">
              By connecting students all over the world to the best instructors.
            </p>
            <a href="#" className="text-blue-500 font-semibold">
              LEARN MORE
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-blue-100 w-16 h-16 items-center flex justify-center transition duration-300 hover:bg-secondary rounded-full">
                <MdOutlineSupportAgent size={40} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-600 mb-4">
              By connecting students all over the world to the best instructors.
            </p>
            <a href="#" className="text-blue-500 font-semibold">
              LEARN MORE
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-blue-100 w-16 h-16 items-center flex justify-center transition duration-300 hover:bg-secondary rounded-full">
                <IoDiamondOutline size={40} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
            <p className="text-gray-600 mb-4">
              By connecting students all over the world to the best instructors.
            </p>
            <a href="#" className="text-blue-500 font-semibold">
              LEARN MORE
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-4 flex items-center justify-center">
              <div className="bg-blue-100 w-16 h-16 items-center flex justify-center transition duration-300 hover:bg-secondary rounded-full">
                <TbTargetArrow size={40} />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Improving</h3>
            <p className="text-gray-600 mb-4">
              By connecting students all over the world to the best instructors.
            </p>
            <a href="#" className="text-blue-500 font-semibold">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
