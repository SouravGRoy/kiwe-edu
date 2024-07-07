import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 font-montserrat text-white py-10 md:mt-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">About :</h4>
            <p className="mb-4">
              Academist is dedicated to constant learning & knowledge sharing.
            </p>
            <ul>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v10M8 8v10m8-5H8"
                  />
                </svg>
                457 Mott Street, NY 10013
              </li>
              <li className="flex items-center mb-2">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v10M8 8v10m8-5H8"
                  />
                </svg>
                +44 300 303 0266
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v10M8 8v10m8-5H8"
                  />
                </svg>
                Mon - Sat 8.00 - 18.00
              </li>
            </ul>
          </div>

          {/* Popular Courses Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Popular courses :</h4>
            <ul>
              <li className="mb-2">Leadership Skills - Mark Hook</li>
              <li className="mb-2">Typography Design - Una Anston</li>
              <li className="mb-2">Learn German - Scott Brown</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Support :</h4>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Registration</li>
              <li className="mb-2">Available Courses</li>
              <li className="mb-2">Become An Instructor</li>
              <li className="mb-2">Events</li>
            </ul>
          </div>

          {/* Flexible Learning Section */}
          <div className="w-full md:w-1/4">
            <h4 className="text-xl font-bold mb-4">Flexible learning -</h4>
            <div className="flex items-center justify-center">
              <Image
                src={"/images/map.png"}
                width={100}
                height={100}
                alt="Map"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; 2018 Qode Interactive, All Rights Reserved
          </p>
          <div className="flex items-center">
            <div className="flex space-x-2">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
