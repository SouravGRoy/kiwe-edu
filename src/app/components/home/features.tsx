import React from "react";
import {
    FaBook,
    FaBullseye,
    FaChartLine,
    FaRocket,
    FaStar,
    FaSyncAlt,
} from "react-icons/fa";

export default function Features() {
    const features = [
        {
            icon: (
                <FaRocket
                    size={40}
                    className="text-secondary transition duration-300 hover:text-white"
                />
            ),
            title: "Experienced Faculty",
            description:
                "Learn from industry experts with years of teaching experience.",
        },
        {
            icon: (
                <FaBook
                    size={40}
                    className="text-secondary transition duration-300 hover:text-white"
                />
            ),
            title: "State-of-the-Art Facilities",
            description:
                "Modern classrooms and labs equipped with the latest technology.",
        },
        {
            icon: (
                <FaStar
                    size={40}
                    className="text-secondary transition duration-300 hover:text-white"
                />
            ),
            title: "Comprehensive Curriculum",
            description:
                "Holistic programs designed to meet industry standards and trends.",
        },
        {
            icon: (
                <FaSyncAlt
                    size={40}
                    className="text-secondary transition duration-300 hover:text-white"
                />
            ),
            title: "Flexible Learning Options",
            description:
                "Online, offline, and hybrid courses to fit your schedule.",
        },
        {
            icon: (
                <FaBullseye
                    size={40}
                    className="text-secondary transition duration-300 hover:text-white"
                />
            ),
            title: "Development Programs",
            description:
                "Focus on academic, extracurricular, and personal growth for students.",
        },
        {
            icon: (
                <FaChartLine
                    size={40}
                    className="text-secondary transition duration-300 hover:text-white"
                />
            ),
            title: "Learning Environment",
            description:
                "Personalized guidance and resources to ensure student success.",
        },
    ];

    return (
        <div className="mb-10 flex flex-col justify-center gap-10 bg-white md:py-20">
            <div className="flex flex-col items-center justify-center font-montserrat">
                <div className="mb-6 flex items-center justify-center rounded-full bg-white px-2 py-1 shadow-md">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-300"></div>
                    <p className="text-base font-semibold text-slate-400">
                        DNAtoms
                    </p>
                </div>
                <h1 className="mb-4 text-center text-4xl leading-none tracking-tight text-zinc-900 md:text-4xl lg:text-4xl">
                    Why US?
                </h1>
                <p className="w-3/4 text-center text-lg font-normal text-gray-500 sm:px-16 lg:text-base xl:px-48 dark:text-gray-400">
                    We provide an inspiring learning environment that nurtures
                    growth and innovation, empowering you to achieve your goals
                    and excel in a rapidly evolving world.
                </p>
            </div>
            {/* Responsive grid layout */}
            <div className="grid grid-cols-1 gap-10 px-10 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex w-full max-w-md items-start p-4 text-black"
                    >
                        <div className="rounded-full bg-blue-100 p-4 transition duration-300 hover:bg-secondary">
                            {feature.icon}
                        </div>
                        <div className="ml-4">
                            <h3 className="text-xl font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
