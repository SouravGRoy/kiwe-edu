import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

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
                Champasari Rd, Ward 46, 734003
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
              <li className="mb-2">Regular Course - (ICSE,ISC AND CBSE)</li>
              <li className="mb-2">Crash Course - (ICSE,ISC AND CBSE)</li>
              <li className="mb-2">Admission fee: Rs. 2000</li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Support :</h4>
            <div className="flex flex-col">
              <Link href="/about" className="mb-2  hover:text-red-500">
                About Us
              </Link>
              <Link href="/contactUs" className="mb-2  hover:text-red-500">
                Services
              </Link>
              <Link href="/coursesUs" className="mb-2  hover:text-red-500">
                Available Courses
              </Link>
              <Link href="/servicesUs" className="mb-2  hover:text-red-500">
                Testimonial
              </Link>
              <Link href="/gallaryUs" className="mb-2  hover:text-red-500">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Flexible Learning Section */}
          <div className="w-full md:w-1/4">
            <h4 className="text-xl md:hidden block font-bold mb-4">
              Flexible learning -
            </h4>
            <div className="flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.8965430289413!2d88.41390641184918!3d26.747677367065005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e44138ad010df7%3A0xfcf7f42f340274c3!2sDNAtoms%20institute!5e0!3m2!1sen!2sin!4v1721408556626!5m2!1sen!2sin"
                width="600"
                height="220"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; Made with ❤️ by kíwë media -{" "}
            <Link href={"www.kiwemedia.com"} className="text-red-500 underline">
              www.kiwemedia.com
            </Link>
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
