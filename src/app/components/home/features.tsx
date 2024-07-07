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
      title: "SEO Optimized",
      description: "Caters to clients who require an intensive approach to SEO",
      href: "#seo-optimized", // Add your target URL here
    },
    {
      icon: (
        <FaBook
          size={40}
          className="text-secondary hover:text-white transition duration-300"
        />
      ),
      title: "Documentation",
      description: "Extensive information needed to install and use Unicoach",
      href: "#documentation", // Add your target URL here
    },
    {
      icon: (
        <FaStar
          size={40}
          className="text-secondary hover:text-white transition duration-300"
        />
      ),
      title: "5 Stars Support",
      description: "Our support team is here, if you run into any questions",
      href: "#5-stars-support", // Add your target URL here
    },
    {
      icon: (
        <FaSyncAlt
          size={40}
          className="text-secondary hover:text-white transition duration-300"
        />
      ),
      title: "Regular Updates",
      description: "Absolutely free updates contain theme improvements",
      href: "#regular-updates", // Add your target URL here
    },
    {
      icon: (
        <FaBullseye
          size={40}
          className="text-secondary hover:text-white transition duration-300"
        />
      ),
      title: "Demo Import",
      description: "Import the full theme demo content with one mouse click",
      href: "#demo-import", // Add your target URL here
    },
    {
      icon: (
        <FaChartLine
          size={40}
          className="text-secondary hover:text-white transition duration-300"
        />
      ),
      title: "UI/UX Design",
      description:
        "Your site will always look sharp, and you'll enjoy the design",
      href: "#ui-ux-design", // Add your target URL here
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:mt-10 -mt-20 bg-white mb-10">
      {features.map((feature, index) => (
        <a
          key={index}
          href={feature.href}
          className="flex items-start p-4 max-w-sm w-full md:w-1/3  text-black"
        >
          <div className="bg-blue-100 p-4 transition duration-300 hover:bg-secondary rounded-full">
            {feature.icon}
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-bold">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
