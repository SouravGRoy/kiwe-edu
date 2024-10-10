import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-900 py-10 font-montserrat text-white md:mt-10">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-wrap justify-between">
                    {/* About Section */}
                    <div className="mb-6 w-full md:mb-0 md:w-1/4">
                        <h4 className="mb-4 text-xl font-bold">About :</h4>
                        <p className="mb-4">
                            Academist is dedicated to constant learning &
                            knowledge sharing.
                        </p>
                        <ul>
                            <li className="mb-2 flex items-center">
                                ● Champasari Rd, Ward 46, 734003
                            </li>
                            <li className="mb-2 flex items-center">
                                ● +91 7718474501 / 77184 74501 / 9800740115
                            </li>
                            <li className="flex items-center">
                                ● Mon - Sat 8.00 - 18.00
                            </li>
                        </ul>
                    </div>

                    {/* Popular Courses Section */}
                    <div className="mb-6 w-full md:mb-0 md:w-1/4">
                        <h4 className="mb-4 text-xl font-bold">
                            Popular courses :
                        </h4>
                        <ul>
                            <li className="mb-2">
                                Regular Course - (ICSE,ISC AND CBSE)
                            </li>
                            <li className="mb-2">
                                Crash Course - (ICSE,ISC AND CBSE)
                            </li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="mb-6 w-full md:mb-0 md:w-1/4">
                        <h4 className="mb-4 text-xl font-bold">Support :</h4>
                        <div className="flex flex-col">
                            <Link
                                href="/aboutUs"
                                className="mb-2 hover:text-red-500"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/servicesUs"
                                className="mb-2 hover:text-red-500"
                            >
                                Services
                            </Link>
                            <Link
                                href="/coursesUs"
                                className="mb-2 hover:text-red-500"
                            >
                                Available Courses
                            </Link>
                            <Link
                                href="/testimonialUs"
                                className="mb-2 hover:text-red-500"
                            >
                                Testimonial
                            </Link>
                            <Link
                                href="/contactUs"
                                className="mb-2 hover:text-red-500"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>

                    {/* Flexible Learning Section */}
                    <div className="w-full md:w-1/4">
                        <h4 className="mb-4 block text-xl font-bold md:hidden">
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

                <div className="mt-8 flex items-center justify-between border-t border-gray-700 pt-4">
                    <p className="text-sm">
                        &copy; Made with ❤️ by kíwë media -{" "}
                        <Link
                            href={"www.kiwemedia.com"}
                            className="text-red-500 underline"
                        >
                            www.kiwemedia.com
                        </Link>
                    </p>

                    <div className="flex items-center">
                        <div className="flex space-x-2">
                            <Link
                                href={
                                    "https://www.instagram.com/dnatoms?igsh=bGR1Z3FuZXFkcXN6"
                                }
                            >
                                {" "}
                                <FaInstagram />
                            </Link>
                            <Link
                                href={"https://m.facebook.com/100092304222336/"}
                            >
                                {" "}
                                <FaFacebook />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
