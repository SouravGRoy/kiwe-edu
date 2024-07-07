import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import Blog from "./blog";
import Stats from "./stats";

export default function LandingAbout() {
  return (
    <div>
      <div>
        <div
          className="h-full w-full "
          style={{ backgroundImage: "url('/images/background1.jpg')" }}
        >
          <div className="flex  justify-center items-center md:py-28 py-14 flex-col">
            <h1 className="text-5xl text-secondary font-extrabold shadow-md rounded-full p-2  my-6">
              About Us
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
                    About Us
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <section className="text-gray-600 font-montserrat body-font">
          <div className="container px-5 md:py-12 py-8 mx-auto">
            <div className="text-center md:mb-20">
              <h1 className="text-base font-thin title-font text-gray-900 mb-4">
                ------- CUSTOMER REVIEWS -------
              </h1>

              <p className="md:text-4xl text-3xl font-bold leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Global Students Provide Us With Outstanding Client Testimonials
              </p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-secondary inline-flex"></div>
              </div>
            </div>
            <Blog />
          </div>
        </section>
        <Stats />
      </div>
    </div>
  );
}
