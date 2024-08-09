"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { PiPhoneCallFill } from "react-icons/pi";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full font-montserrat ">
      {/* Top bar */}
      <div className="bg-gray-900 md:flex text-white hidden justify-around items-center px-4 py-2 text-sm">
        <div>Call +44 300 303 0266</div>
        <div className="flex flex-row space-x-2">
          <span>Follow us :</span>
          <div className="flex space-x-2 mt-1">
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
        <div className="flex space-x-4">kiwe@gmail.com</div>
      </div>
      {/* Main navbar */}
      <div className=" bg-gradient-to-r dark:to-white from-secondary  dark:from-background  shadow-sm">
        <div className="container mx-auto px-4 md:py-2 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href={"/"} className="flex  items-center md:space-x-2">
            <Image
              src="/images/logoX.png"
              alt="Academist"
              width={100}
              height={100}
              className="md:w-48"
            />
          </Link>
          {/* Links */}
          <div className="hidden font-semibold lg:flex space-x-12">
            <Link
              href="/aboutUs"
              className="text-black active:text-primary hover:underline"
            >
              About
            </Link>
            <Link
              href="/coursesUs"
              className="text-black active:text-primary hover:underline"
            >
              Courses Lists
            </Link>
            <Link
              href="/servicesUs"
              className="text-black active:text-primary hover:underline"
            >
              Services
            </Link>
            <Link
              href="/hostelUs"
              className="text-black active:text-primary hover:underline"
            >
              Hostel
            </Link>
            <Link
              href="/testimonialUs"
              className="text-black active:text-primary hover:underline"
            >
              Testimonial
            </Link>
            <Link
              href="/gallaryUs"
              className="text-black active:text-primary hover:underline"
            >
              Gallery
            </Link>
          </div>
          {/* Icons */}
          <div className="flex md:space-x-2 items-center ">
            <Link
              className="flex shadow-md rounded-xl px-2 py-1 hover:shadow-xl transition duration-500"
              href={"/contactUs"}
            >
              {" "}
              <h1 className="md:text-base text-xs  mx-1">Contact Us:</h1>
              <div className="relative">
                <PiPhoneCallFill className="text-xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  0
                </span>
              </div>
            </Link>

            <div className="shadow-md p-2 ml-4 lg:hidden rounded-full hover:shadow-lg transition duration-300">
              <FiMenu className="text-xl" onClick={toggleMenu} />
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="lg:hidden absolute z-30 font-montserrat font-bold text-xl top-20 justify-center w-full py-8 bg-primary  flex flex-col items-center space-y-4 mt-2"
          >
            <Link
              href="/aboutUs"
              className="text-black underline hover:underline"
            >
              About
            </Link>
            <Link
              href="/coursesUs"
              className="text-black underline hover:underline"
            >
              Courses Lists
            </Link>
            <Link
              href="/servicesUs"
              className="text-black underline hover:underline"
            >
              Hostel
            </Link>
            <Link
              href="/gallaryUs"
              className="text-black underline hover:underline"
            >
              Testimonial
            </Link>
            <Link
              href="/servicesUs"
              className="text-black underline hover:underline"
            >
              Services
            </Link>
            <Link
              href="/gallaryUs"
              className="text-black underline hover:underline"
            >
              Gallery
            </Link>
            <Link
              href="/contactUs"
              className="text-black underline hover:underline"
            >
              Apply Now
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}
