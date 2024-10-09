import React from "react";
import { GoRocket } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";

export default function LandingService() {
    return (
        <div>
            <div
                className="h-full w-full"
                style={{ backgroundImage: "url('/images/background1.jpg')" }}
            >
                <div className="flex flex-col items-center justify-center py-14 md:py-28">
                    <h1 className="my-6 rounded-full p-2 text-5xl font-extrabold text-secondary shadow-md">
                        Services
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
                                    Service
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="bg-gray-50 px-12 py-8 font-montserrat md:px-20 md:py-16">
                <div>
                    <div className="mb-4 flex items-center justify-start space-x-4">
                        <button className="rounded-full border border-gray-200 bg-white p-2 px-4 text-xs font-semibold text-green-600 shadow-lg">
                            <span className="mr-1 inline-flex h-2 w-2 items-center justify-center rounded-full bg-green-500"></span>
                            START NOW
                        </button>
                    </div>
                    <div className="flex flex-col justify-between md:flex-row">
                        <h2 className="mb-8 text-start text-4xl font-bold">
                            Explore How can I help you
                        </h2>
                        <p className="pb-10 text-base text-gray-400 md:w-1/2">
                            When you come to coaching or counseling, we work
                            with you, your situation / issue and together we
                            find the best solution for you. All the tools we
                            will use, you will be able to apply later in life.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                        <div className="mb-4 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition duration-300 hover:bg-secondary">
                                <GoRocket size={40} />
                            </div>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">Motivate</h3>
                        <p className="mb-4 text-gray-600">
                            By connecting students all over the world to the
                            best instructors.
                        </p>
                        {/* <a href="#" className="text-blue-500 font-semibold">
              LEARN MORE
            </a> */}
                    </div>
                    <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                        <div className="mb-4 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition duration-300 hover:bg-secondary">
                                <MdOutlineSupportAgent size={40} />
                            </div>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">Support</h3>
                        <p className="mb-4 text-gray-600">
                            By connecting students all over the world to the
                            best instructors.
                        </p>
                        {/* <a href="#" className="text-blue-500 font-semibold">
              LEARN MORE
            </a> */}
                    </div>
                    <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                        <div className="mb-4 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition duration-300 hover:bg-secondary">
                                <IoDiamondOutline size={40} />
                            </div>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            Mentorship
                        </h3>
                        <p className="mb-4 text-gray-600">
                            By connecting students all over the world to the
                            best instructors.
                        </p>
                        {/* <a href="#" className="text-blue-500 font-semibold">
              LEARN MORE
            </a> */}
                    </div>
                    <div className="rounded-lg bg-white p-8 text-center shadow-lg">
                        <div className="mb-4 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 transition duration-300 hover:bg-secondary">
                                <TbTargetArrow size={40} />
                            </div>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                            Improving
                        </h3>
                        <p className="mb-4 text-gray-600">
                            By connecting students all over the world to the
                            best instructors.
                        </p>
                        {/* <a href="#" className="text-blue-500 font-semibold">
              LEARN MORE
            </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
