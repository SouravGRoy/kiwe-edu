import React from "react";
import {
  FaRocket,
  FaBook,
  FaStar,
  FaSyncAlt,
  FaBullseye,
  FaChartLine,
} from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: (
        <FaRocket
          size={40}
          className="text-secondary hover:text-white transition duration-300"
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
          className="text-secondary hover:text-white transition duration-300"
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
          className="text-secondary hover:text-white transition duration-300"
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
          className="text-secondary hover:text-white transition duration-300"
        />
      ),
      title: "Flexible Learning Options",
      description: "Online, offline, and hybrid courses to fit your schedule.",
    },
    {
      icon: (
        <FaBullseye
          size={40}
          className="text-secondary hover:text-white transition duration-300"
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
          className="text-secondary hover:text-white transition duration-300"
        />
      ),
      title: "Learning Environment",
      description:
        "Personalized guidance and resources to ensure student success.",
    },
  ];

  return (
    <div className="flex flex-col justify-center md:py-20 mb-10 bg-white gap-10">
      <div className="flex flex-col font-montserrat justify-center items-center">
        <div className="rounded-full bg-white mb-6 flex items-center justify-center shadow-md px-2 py-1">
          <div className="rounded-full w-2 h-2 bg-green-300 mr-2"></div>
          <p className="text-base text-slate-400 font-semibold">DNAtoms</p>
        </div>
        <h1 className="mb-4 text-4xl text-center leading-none tracking-tight font-semibold text-zinc-900 md:text-4xl lg:text-4xl">
          Why US?
        </h1>
        <p className="text-lg w-3/4 text-center font-normal text-gray-500 lg:text-base sm:px-16 xl:px-48 dark:text-gray-400">
          Experience visionary education tailored to unleash your potential and
          prepare you for a dynamic future at Visionary Institute.
        </p>
      </div>
      {/* Update the grid to have 2 rows with 3 columns */}
      <div className="grid grid-cols-3 px-10 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start p-4 max-w-md w-full text-black"
          >
            <div className="bg-blue-100 p-4 transition duration-300 hover:bg-secondary rounded-full">
              {feature.icon}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
