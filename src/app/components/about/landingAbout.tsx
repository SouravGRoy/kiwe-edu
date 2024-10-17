import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Blog from "./blog";
import Stats from "./stats";

export default function LandingAbout() {
    return (
        <div>
            <div>
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage: "url('/images/background1.jpg')",
                    }}
                >
                    <div className="flex flex-col items-center justify-center py-14 md:py-28">
                        <h1 className="my-6 rounded-full p-2 text-5xl font-extrabold text-secondary shadow-md">
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
                                        className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
                                    >
                                        About Us
                                    </a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <section className="body-font font-montserrat text-gray-600">
                    <div className="container mx-auto px-2 py-8 md:py-12">
                        <div className="text-center md:mb-20">
                            <h1 className="title-font mb-4 text-base font-thin text-gray-900">
                                ------- STUDENTS REVIEWS -------
                            </h1>

                            <p className="text-gray-500s mx-auto text-3xl font-bold leading-relaxed md:text-4xl lg:w-3/4 xl:w-2/4">
                                Our Students Trust Us{" "}
                            </p>
                            <div className="mt-6 flex justify-center">
                                <div className="inline-flex h-1 w-16 rounded-full bg-secondary"></div>
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
