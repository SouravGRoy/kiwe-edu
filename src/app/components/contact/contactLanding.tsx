import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function LandingContact() {
  return (
    <div>
      <div
        className="h-full w-full "
        style={{ backgroundImage: "url('/images/background1.jpg')" }}
      >
        <div className="flex  justify-center items-center md:py-28 py-14 flex-col">
          <h1 className="text-5xl text-secondary font-extrabold shadow-md rounded-full p-2  my-6">
            Contact
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
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
