"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Apage() {
  // Animation variants for the first section
  const pyramidVariants = {
    hidden: { opacity: 0, x: -100, y: 0 },
    visible: (i: number) => ({
      opacity: 1,
      x: 10,
      y: [-60, -40, 60, -80, 100, 0], // Creating the "A" shape
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.5,
        delay: i * 0.3, // Stagger effect
        ease: "easeInOut",
      },
    }),
  };

  // Animation variants for the second section
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 1.5,
        delay: i * 0.3, // Stagger effect
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="bg-[#f5f0f0] px-36 p-8 flex flex-col h-screen lg:flex-row lg:space-x-8 items-center">
      <motion.div
        className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0"
        initial="hidden"
        animate="visible"
        variants={pyramidVariants}
      >
        <motion.h1
          className="text-7xl font-bold mb-14"
          initial="hidden"
          animate="visible"
          variants={pyramidVariants}
        >
          Mental health, reimagined for{" "}
          <span className="font-light font-serif">students</span>
        </motion.h1>

        <motion.h2
          className="text-2xl mb-6 w-3/4"
          initial="hidden"
          animate="visible"
          variants={pyramidVariants}
        >
          Helping your students succeed and thrive with the help of licensed
          therapists and a community of peers. When and where they need it most.
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={pyramidVariants}
        >
          <Button className="bg-[#FF6B00] text-black text-lg rounded-lg py-8 px-8">
            Join now
          </Button>
        </motion.div>
      </motion.div>

      {/* 2nd section */}
      <motion.div
        className="relative flex-1 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        custom={0} // Stagger effect
      >
        {/* First Image with GIF Background */}
        <motion.div
          className="absolute left-32 transform bottom-20"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          custom={1}
        >
          <Image
            src="/images/animation5.gif"
            alt="Background GIF"
            width={800}
            height={800}
            className="rounded-lg max-w-lg -translate-x-44"
          />
        </motion.div>

        <div className="">
          <motion.div
            className="absolute bottom-0 left-52"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={2}
          >
            <Image
              src="/images/arrowx3.gif"
              alt="Person 2"
              width={140}
              unoptimized
              height={300}
              className="rounded-lg rotate-90"
            />
          </motion.div>
          <motion.div
            className="absolute -rotate-90 left-48 z-10"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={3}
          >
            <Image
              src="/images/arrowx2.gif"
              alt="Person 2"
              width={120}
              unoptimized
              height={300}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            className="absolute -top-16 right-28"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={4}
          >
            <Image
              src="/images/arrowx1.gif"
              alt="Person 2"
              width={100}
              unoptimized
              height={300}
              className="rounded-lg rotate-90"
            />
          </motion.div>
        </div>

        {/* Second Image */}
        <motion.div
          className="absolute top-1 -left-32 transform -translate-y-24"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          custom={5}
        >
          <Image
            src="/images/animation8.gif"
            alt="Person 2"
            width={350}
            unoptimized
            height={300}
            className="rounded-lg"
          />
        </motion.div>

        {/* Third Image */}
        <motion.div
          className="absolute top-14 right-0 transform -translate-x-1"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          custom={6}
        >
          <Image
            src="/images/animation10.gif"
            alt="Person 3"
            width={200}
            height={200}
            className="rounded-lg"
          />
        </motion.div>

        {/* Connecting arrows */}
        <div className="absolute flex items-center justify-center w-full h-full">
          {/* Add SVGs for arrows or connect them using the ::before or ::after pseudo-elements in Tailwind */}
        </div>
      </motion.div>
    </div>
  );
}
