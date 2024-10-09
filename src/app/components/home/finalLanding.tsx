"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SmallVideoPlayer from "./smallVideoPlayer";

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
                    {/* Notification Text */}
                    <div className="mb-6 flex rounded-full bg-white px-4 py-2 shadow-md">
                        <div className="my-2 mr-2 h-2 w-2 rounded-full bg-green-300 md:h-3 md:w-3"></div>
                        <p className="text-md text-slate-400 md:text-lg">
                            Premium Class with Absolute faculty
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="mb-4 text-5xl font-bold md:text-7xl">
                        DNAtom&apos;s
                    </h1>
                    <p className="text-4xl font-bold text-secondary md:text-6xl">
                        Institute
                    </p>

                    {/* Subtitle */}
                    <p className="text-md mt-4 text-start md:text-center md:text-lg">
                        &quot;Inspiring excellence through innovative
                        education.&quot;
                    </p>

                    {/* Buttons */}
                    <div className="z-30 mt-8 flex space-x-4 px-2">
                        <Link href="/coursesUs">
                            <Button
                                variant="outline"
                                size="lg"
                                className="mb-2 text-base text-zinc-900 backdrop-blur-sm hover:text-white md:text-lg"
                            >
                                View Programs
                            </Button>
                        </Link>
                        <Link href={"/contactUs"}>
                            <Button
                                size={"lg"}
                                variant="secondary"
                                className="rounded text-lg font-bold text-white md:px-6 md:text-xl"
                            >
                                Enroll Now
                            </Button>
                        </Link>
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
