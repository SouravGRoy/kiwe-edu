"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SmallVideoPlayer from "./smallVideoPlayer";

export default function FinalLanding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className="flex flex-row font-montserrat md:px-16 mb-20 md:-mb-20 bg-gradient-to-b from-primary/100 to-transparent bg-cover bg-right md:bg-center md:justify-between justify-center w-full md:h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center md:py-32 pt-16 text-center z-20"
        >
          <div className="rounded-full bg-white mb-6 flex px-2 py-1 shadow-md">
            <div className="rounded-full md:w-2 md:h-2 w-1 h-1 my-2 mr-1 bg-green-300"></div>
            <p className="text-sm md:text-base text-slate-400">
              Premium Class with Absolute faculty
            </p>
          </div>
          <h1 className="md:text-5xl text-4xl mb-2 font-bold">DNAtom&apos;s</h1>
          <p className="text-secondary font-bold text-4xl md:text-5xl">
            Institute
          </p>
          <p className="mt-2 text-sm text-start md:text-md">
            &quot;Inspiring excellence through innovative education.&quot;
          </p>
          <div className="mt-8 flex space-x-3 px-2 z-30">
            <Button
              variant="outline"
              size="lg"
              className="text-zinc-900  hover:text-white text-base backdrop-blur-sm mb-2"
            >
              View Programs
            </Button>
            <Button
              size={"lg"}
              variant="secondary"
              className="text-white font-bold text-lg md:px-5 rounded"
            >
              Enroll Now
            </Button>
          </div>
        </motion.div>

        <video
          className="w-3/5 hidden md:block py-10 h-3/4 rounded-3xl object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn.sanity.io/files/r115idoc/production/06fbbb468c9a75dec6e4a6207356589cf3858d09.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <SmallVideoPlayer /> {/* Include the video player component */}
    </div>
  );
}
