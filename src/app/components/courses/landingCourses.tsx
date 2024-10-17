import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function LandingCourses() {
    return (
        <div>
            <div
                className="h-full w-full"
                style={{ backgroundImage: "url('/images/background1.jpg')" }}
            >
                <div className="flex flex-col items-center justify-center py-14 md:py-28">
                    <h1 className="my-6 rounded-full p-2 text-5xl font-extrabold text-secondary shadow-md">
                        Courses
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
                                    Courses
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="mb-4 mt-8 flex items-center justify-center space-x-4 font-montserrat">
                <button className="rounded-full border border-gray-200 bg-white p-2 px-4 text-xs font-semibold text-green-600 shadow-lg">
                    <span className="mr-1 inline-flex h-2 w-2 items-center justify-center rounded-full bg-green-500"></span>
                    EXPLORE OUR COURSES
                </button>
            </div>
            <h2 className="mb-8 text-center text-4xl font-semibold">
                Be the Best With Our Courses
            </h2>
        </div>
    );
}
