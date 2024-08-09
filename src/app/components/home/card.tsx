"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    // <div className=" overflow-hidden md:px-12  bg-white shadow-lg md:h-2/3 h-full rounded-lg flex m-2">
    //   <Image
    //     src={imageSrc}
    //     width={100}
    //     height={100}
    //     alt={title}
    //     className="w-full h-full object-cover object-center"
    //   />
    //   <div className=" p-20 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-300">
    //     <div className=" flex flex-col items-center justify-center">
    //       <h2 className="text-xl font-['NeueMontreal-Regular'] mb-2 text-[#ADBBDA] font-semibold">
    //         {title}
    //       </h2>
    //       <p className="text-white px-4 font-['NeueMontreal-Regular'] text-center">
    //         {description}
    //       </p>
    //       <Button variant={"secondary"} className="mt-4">
    //         Explore
    //       </Button>
    //     </div>
    //   </div>
    // </div>
    <div className="flex-col bg-white shadow-lg border-t-2 p-5 rounded-lg flex ">
      <div className="feature-icon inline-flex items-center justify-start text-primary  text-2xl mb-3">
        <Image
          src={imageSrc}
          width={60}
          height={60}
          alt={title}
          className="w-100 h-100 object-cover rounded-full object-center"
        />
      </div>
      <h3 className="text-2xl text-gray-900">{title}</h3>
      <p>{description}</p>
      <a
        href="/coursesUs"
        className="icon-link text-blue-500 inline-flex items-center"
      >
        Read More
        <svg className="bi w-4 h-4 ml-2" fill="currentColor">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
  );
};

export default function Cards() {
  return (
    <div className="md:px-20 px-10 md:mb-6 mb-20">
      <div className="flex -ml-2">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:my-20 mt-10 md:mb-0 mb-10">
            <Card
              title="Lost Space"
              description="LostSpace is the fastest growing Music Studio in WB"
              imageSrc={"/images/card1.jpg"}
            />
          </div>
          <div className="md:my-20 md:mb-0 mb-10">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Media(Currently in Progress)"
              imageSrc={"/images/card2.jpg"}
            />
          </div>
          <div className="md:my-20 ">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Media(Currently in Progress)"
              imageSrc={"/images/card3.jpg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
