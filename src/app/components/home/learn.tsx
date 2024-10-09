"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Learn() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="flex flex-col font-montserrat mt-10  justify-center items-center">
        <div className="rounded-full bg-white mb-6 flex items-center justify-center shadow-md px-2 py-1">
          <div className="rounded-full w-2 h-2 bg-green-300 mr-2"></div>
          <p className="text-base text-slate-400 font-semibold">DNAtoms </p>
        </div>
        <h1 className="mb-4 text-4xl text-center   leading-none tracking-tight font-semibold text-zinc-900 md:text-4xl lg:text-4xl ">
          Director&apos;s Word
        </h1>
      </div>
      <div className="flex md:flex-row flex-col px-10 ">
        <div className="relative w-full md:w-2/3">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
            variants={container}
            className="relative"
          >
            <motion.div variants={item} transition={{ duration: 0, delay: 1 }}>
              <Image
                src={"/images/learn1.png"}
                width={1000}
                height={1000}
                alt="learn1"
                className="w-full h-auto relative z-10"
              />
            </motion.div>
            <motion.div
              variants={item}
              transition={{ duration: 1, delay: 1.3 }}
              className="absolute bottom-0 left-0 w-full z-10"
            >
              <Image
                src={"/images/learn3.png"}
                width={1000}
                height={1000}
                alt="learn3"
                className="w-full h-auto mt-4 relative z-10"
              />
            </motion.div>
            <motion.div
              variants={item}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Image
                src={"/images/learn2.png"}
                width={1000}
                height={1000}
                alt="learn2"
                className="w-full absolute bottom-0 h-auto z-0"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="font-montserrat md:items-start items-center w-full md:w-1/2 py-14 flex flex-col">
          <div className="rounded-full bg-white w-fit flex px-2 py-1 shadow-md">
            <div className="rounded-full md:w-2 md:h-2 w-1 h-1 pt-5 mr-1 bg-green-300"></div>
            <p className="text-sm uppercase text-slate-400">
              Vision for the Future
            </p>
          </div>
          <div className="text-center md:text-start">
            <h1 className="text-4xl py-4">
              Empowering Leaders, Innovating Tomorrow.
            </h1>
            <p className="text-base text-gray-400">
              Every child is special in his/her own way and has the ability and
              the capacity to attain his/her dream. In order to achieve those
              dreams children require a very strong reliable academic system
              which will help them to climb up the stairs to success
            </p>
          </div>

          <Button
            variant={"secondary"}
            className="mt-8 p-6 shadow-md shadow-cyan-200 hover:drop-shadow-md w-fit"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
