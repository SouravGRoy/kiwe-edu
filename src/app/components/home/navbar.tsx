"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { PiPhoneCallFill } from "react-icons/pi";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full font-montserrat">
            {/* Top bar */}
            <div className="hidden items-center justify-around bg-gray-900 px-4 py-2 text-sm text-white md:flex">
                <div>Call +91 9800740115 </div>
                <div className="flex flex-row space-x-2">
                    <span>Follow us :</span>
                    <div className="mt-1 flex space-x-2">
                  <Link href={"https://www.instagram.com/dnatoms?igsh=bGR1Z3FuZXFkcXN6"}>  <FaInstagram /></Link>     
                       <Link href={"https://m.facebook.com/100092304222336/"}> <FaFacebook /></Link>
                       
                    </div>
                </div>
                <div className="flex space-x-4">dnatomsinstitute@gmail.com

                </div>
            </div>
            {/* Main navbar */}
            <div className="dark:from-background bg-gradient-to-r from-secondary shadow-sm dark:to-white">
                <div className="container mx-auto flex items-center justify-between px-4 py-5 md:py-2">
                    {/* Logo */}
                    <Link href={"/"} className="flex items-center md:space-x-2">
                        <Image
                            src="/images/logoX.png"
                            alt="Academist"
                            width={100}
                            height={100}
                            className="md:w-48"
                        />
                    </Link>
                    {/* Links */}
                    <div className="hidden space-x-12 font-semibold lg:flex">
                        <Link
                            href="/aboutUs"
                            className="text-black hover:underline active:text-primary"
                        >
                            About
                        </Link>
                        <Link
                            href="/coursesUs"
                            className="text-black hover:underline active:text-primary"
                        >
                            Courses Lists
                        </Link>
                        <Link
                            href="/servicesUs"
                            className="text-black hover:underline active:text-primary"
                        >
                            Services
                        </Link>
                        {/* <Link
                            href="/hostelUs"
                            className="text-black hover:underline active:text-primary"
                        >
                            Hostel
                        </Link> */}
                        <Link
                            href="/testimonialUs"
                            className="text-black hover:underline active:text-primary"
                        >
                            Testimonial
                        </Link>
                        <Link
                            href="/gallaryUs"
                            className="text-black hover:underline active:text-primary"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/materials"
                            className="text-black hover:underline active:text-primary"
                        >
                            Materials
                        </Link>
                    </div>
                    {/* Icons */}
                    <div className="flex items-center md:space-x-2">
                        <Link
                            className="flex rounded-xl px-2 py-1 shadow-md transition duration-500 hover:shadow-xl"
                            href={"/contactUs"}
                        >
                            {" "}
                            <h1 className="mx-1 text-xs md:text-base">
                                Contact Us:
                            </h1>
                            <div className="relative">
                                <PiPhoneCallFill className="text-xl" />
                                <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1 text-xs text-white">
                                    0
                                </span>
                            </div>
                        </Link>

                        <div className="ml-4 rounded-full p-2 shadow-md transition duration-300 hover:shadow-lg lg:hidden">
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
                        className="absolute top-20 z-30 mt-2 flex w-full flex-col items-center justify-center space-y-4 bg-primary py-8 font-montserrat text-xl font-bold lg:hidden"
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
                        {/* <Link
                            href="/servicesUs"
                            className="text-black underline hover:underline"
                        >
                            Hostel
                        </Link> */}
                        <Link
                            href="/testimonialUs"
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
                              href="/materials"
                            className="text-black underline hover:underline"
                        >
                            Materials
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