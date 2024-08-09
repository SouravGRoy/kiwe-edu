import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function LandingHostel() {
  return (
    <div>
      <div
        className="h-full w-full "
        style={{ backgroundImage: "url('/images/background1.jpg')" }}
      >
        <div className="flex  justify-center items-center md:py-28 py-14 flex-col">
          <h1 className="text-5xl text-secondary font-extrabold shadow-md rounded-full p-2  my-6">
            Hostel
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
                  Hostel
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="flex items-center font-montserrat justify-center space-x-4 mt-8 mb-4">
        <button className="bg-white border border-gray-200 text-green-600 rounded-full px-4 shadow-lg p-2 text-xs font-semibold">
          <span className="inline-flex items-center justify-center  h-2 w-2 bg-green-500 rounded-full mr-1"></span>
          EXPLORE OUR Hostel
        </button>
      </div>
      <h2 className="text-4xl font-semibold text-center mb-8">
        Under Construction : Please Check Again
      </h2>
    </div>
  );
}
