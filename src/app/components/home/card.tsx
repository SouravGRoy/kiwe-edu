"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="relative overflow-hidden bg-white shadow-lg rounded-lg h-full w-11/12 m-2"
    >
      <Image
        src={imageSrc}
        width={1000}
        height={1000}
        alt={title}
        className="w-full h-full  object-cover object-center"
      />
      <div className="absolute inset-0 p-20 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-xl font-['NeueMontreal-Regular'] mb-2 text-[#ADBBDA] font-semibold">
            {title}
          </h2>
          <p className="text-white font-['NeueMontreal-Regular'] text-center">
            {description}
          </p>
        </div>
      </div>
      <div className="p-4 ">
        <h2 className="text-xl text-white font-semibold">{title}</h2>
      </div>
    </motion.div>
  );
};

export default function Cards() {
  return (
    <div className=" px-12 ">
      <div className="flex -ml-2">
        <div className="grid md:grid-cols-3 justify-center">
          <div className="md:my-20 my-8">
            <Card
              title="Lost Space"
              description="LostSpace is the fastest growing Music Studio in WB"
              imageSrc={"/images/card1.jpg"}
            />
            <h1 className="px-2 text-2xl underline font-bold text-center text-[#a176e8]">
              BCA
            </h1>
          </div>
          <div className="md:my-20 my-8">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Meida(Currently in Progress) "
              imageSrc={"/images/card2.jpg"}
            />
            <h1 className="px-2 text-2xl underline font-bold text-center text-[#a176e8]">
              MBA
            </h1>
          </div>
          <div className="md:my-20 my-8">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Meida(Currently in Progress) "
              imageSrc={"/images/card3.jpg"}
            />
            <h1 className="px-2 text-2xl underline font-bold text-center text-[#a176e8]">
              B.COM
            </h1>
          </div>

          <div className="md:my-20 my-8">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Meida(Currently in Progress) "
              imageSrc={"/images/card4.jpg"}
            />
            <h1 className="px-2 font-['NeueMontreal-Regular'] rounded-full border-[1px] text-start text-[#ede8f59a]">
              - In Progress
            </h1>
          </div>
          <div className="md:my-20 my-8">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Meida(Currently in Progress) "
              imageSrc={"/images/card5.jpg"}
            />
            <h1 className="px-2 font-['NeueMontreal-Regular'] rounded-full border-[1px] text-start text-[#ede8f59a]">
              - In Progress
            </h1>
          </div>
          <div className="md:my-20 my-8">
            <Card
              title="Kiwe"
              description="Kiwe is a Community Social Meida(Currently in Progress) "
              imageSrc={"/images/card1.jpg"}
            />
            <h1 className="px-2 font-['NeueMontreal-Regular'] rounded-full border-[1px] text-start text-[#ede8f59a]">
              - In Progress
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
