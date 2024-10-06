"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import SmallVideoPlayer from "./smallVideoPlayer";
import Link from "next/link";

export default function FinalLanding() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);


    return (
        <div>
            <div className="mb-20 flex w-full flex-row justify-center bg-gradient-to-b from-primary/100 to-transparent bg-cover bg-right font-montserrat md:-mb-20 md:h-screen md:justify-between md:bg-center md:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{
                        opacity: isVisible ? 1 : 0,
                        y: isVisible ? 0 : 50,
                    }}
                    transition={{ duration: 0.9 }}
                    className="z-20 flex flex-col items-center pt-16 text-center md:py-32"
                >
                    <div className="mb-6 flex rounded-full bg-white px-2 py-1 shadow-md">
                        <div className="my-2 mr-1 h-1 w-1 rounded-full bg-green-300 md:h-2 md:w-2"></div>
                        <p className="text-sm text-slate-400 md:text-base">
                            Premium Class with Absolute faculty
                        </p>
                    </div>
                    <h1 className="mb-2 text-4xl font-bold md:text-5xl">
                        DNAtom&apos;s
                    </h1>
                    <p className="text-4xl font-bold text-secondary md:text-5xl">
                        Institute
                    </p>
                    <p className="md:text-md mt-2 text-start text-sm">
                        &quot;Inspiring excellence through innovative
                        education.&quot;
                    </p>
                    <div className="z-30 mt-8 flex space-x-3 px-2">
                        <Button
                            variant="outline"
                            size="lg"
                            className="mb-2 text-base text-zinc-900 backdrop-blur-sm hover:text-white"
                        >
                            View Programs
                        </Button>
                        <Button
                            size={"lg"}
                            variant="secondary"
                            className="rounded text-lg font-bold text-white md:px-5"
                        >
                            Enroll Now
                        </Button>
                    </div>
                </motion.div>
  return (
    <div>
      <div className="flex flex-row font-montserrat md:px-16 mb-20 md:-mb-20 bg-gradient-to-b from-primary/100 to-transparent bg-cover bg-right md:bg-center md:justify-between justify-center w-full md:h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center md:py-32 pt-16 text-center z-20"
        >
          {/* Notification Text */}
          <div className="rounded-full bg-white mb-6 flex px-4 py-2 shadow-md">
            <div className="rounded-full md:w-3 md:h-3 w-2 h-2 my-2 mr-2 bg-green-300"></div>
            <p className="text-md md:text-lg text-slate-400">
              Premium Class with Absolute faculty
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl mb-4 font-bold">DNAtom&apos;s</h1>
          <p className="text-secondary font-bold text-4xl md:text-6xl">
            Institute
          </p>

          {/* Subtitle */}
          <p className="mt-4 text-md md:text-lg text-start md:text-center">
            &quot;Inspiring excellence through innovative education.&quot;
          </p>

          {/* Buttons */}
          <div className="mt-8 flex space-x-4 px-2 z-30">
            <Link   href="/coursesUs">
            <Button
              variant="outline"
              size="lg"
              className="text-zinc-900 hover:text-white text-base md:text-lg backdrop-blur-sm mb-2"
            >
              View Programs
            </Button>
          </Link>
           <Link href={"/contactUs"}>
           <Button
              size={"lg"}
              variant="secondary"
              className="text-white font-bold text-lg md:text-xl md:px-6 rounded"
            >
              Enroll Now
            </Button></Link>
           
          </div>
        </motion.div>


                <video
                    className="hidden h-3/4 w-3/5 rounded-3xl object-cover py-10 md:block"
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
