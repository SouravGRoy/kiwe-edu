"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Landing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className=" font-montserrat inset-0 bg-gradient-to-b from-primary/100 to-transparent bg-cover bg-right md:bg-center relative w-full h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col md:px-20 px-8 items-start md:py-44 pt-16 text-center z-20" // Ensure buttons are on top
        >
          <div className="rounded-full bg-white mb-6 flex px-2 py-1 shadow-md">
            <div className="rounded-full md:w-2 md:h-2 w-1 h-1 my-2 mr-1 bg-green-300"></div>
            <p className="text-sm md:text-base text-slate-400">
              Live Coaching and Online courses
            </p>
          </div>
          <h1 className="md:text-5xl text-4xl mb-2 font-bold">
            Siliguri&apos;s 1st
          </h1>
          <p className="text-secondary font-bold text-4xl md:text-5xl">
            Next-Gen College
          </p>
          <p className="mt-2 text-sm text-start md:text-md">
            Get access to 50+ modern degrees and job-oriented courses.
          </p>
          <div className="mt-8 flex flex-col md:flex-row z-30">
            {" "}
            {/* Ensure buttons are on top */}
            <Button
              variant="outline"
              className="text-zinc-900 backdrop-blur-sm  mb-2 md:mr-4"
            >
              View Programs
            </Button>
            <Button
              variant="secondary"
              className="text-black font-bold md:px-4 py-2 rounded"
            >
              Enroll Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/images/uni.png"
            alt="Unicoach background"
            width={100}
            height={100}
            className="z-0 w-1/2 absolute md:bottom-32 bottom-44"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
          transition={{ duration: 1.3, delay: 1 }}
          className="flex md:py-16 pt-64 md:space-x-24 justify-end relative z-10"
        >
          <Image
            src={"/images/mobile.png"}
            alt="product"
            className="md:w-56 w-2/12 h-1/6 md:h-1/3"
            width={200}
            height={200}
          />
          <Image
            src="/images/landing1.png"
            alt="Product screenshot"
            className="md:w-1/3 md:py-24 pt-16 rounded-xl"
            width={200}
            height={200}
          />
        </motion.div>
      </div>
    </div>
  );
}
