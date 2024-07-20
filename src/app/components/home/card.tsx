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
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative overflow-hidden md:px-12  bg-white shadow-lg md:h-2/3 h-full rounded-lg flex m-2"
    >
      <Image
        src={imageSrc}
        width={1000}
        height={500}
        alt={title}
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 p-20 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-xl font-['NeueMontreal-Regular'] mb-2 text-[#ADBBDA] font-semibold">
            {title}
          </h2>
          <p className="text-white px-4 font-['NeueMontreal-Regular'] text-center">
            {description}
          </p>
          <Button variant={"secondary"} className="mt-4">
            Explore
          </Button>
        </div>
      </div>
    </motion.div>
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
            <h1 className="px-2 text-2xl underline font-bold text-center text-[#a176e8]">
              BCA
            </h1>
          </div>
          <div className="md:my-20 md:mb-0 mb-10">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Media(Currently in Progress)"
              imageSrc={"/images/card2.jpg"}
            />
            <h1 className="px-2 text-2xl underline font-bold text-center text-[#a176e8]">
              MBA
            </h1>
          </div>
          <div className="md:my-20 ">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Media(Currently in Progress)"
              imageSrc={"/images/card3.jpg"}
            />
            <h1 className="px-2 text-2xl underline font-bold text-center text-[#a176e8]">
              B.COM
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
