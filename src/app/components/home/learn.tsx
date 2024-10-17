"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            <div className="mt-10 flex flex-col items-center justify-center font-montserrat">
                <div className="mb-6 flex items-center justify-center rounded-full bg-white px-2 py-1 shadow-md">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-300"></div>
                    <p className="text-base font-semibold text-slate-400">
                        DNAtoms{" "}
                    </p>
                </div>
                <h1 className="mb-4 text-center text-4xl leading-none tracking-tight text-zinc-900 md:text-4xl lg:text-4xl">
                    Director&apos;s Word
                </h1>
            </div>
            <div className="flex flex-col px-10 md:flex-row">
                <div className="relative w-full md:w-2/3">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 1 }}
                        variants={container}
                        className="relative"
                    >
                        <motion.div
                            variants={item}
                            transition={{ duration: 0, delay: 1 }}
                        >
                            <Image
                                src={"/images/director.png"}
                                width={1000}
                                height={1000}
                                alt="learn1"
                                className="relative z-10 h-auto w-full"
                            />
                        </motion.div>
                        <motion.div
                            variants={item}
                            transition={{ duration: 1, delay: 1.3 }}
                            className="absolute bottom-0 left-0 z-10 w-full"
                        >
                            <Image
                                src={"/images/learn3.png"}
                                width={1000}
                                height={1000}
                                alt="learn3"
                                className="relative z-10 mt-4 h-auto w-full"
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
                                className="absolute bottom-0 z-0 h-auto w-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                <div className="flex w-full flex-col items-center py-14 font-montserrat md:w-1/2 md:items-start">
                    <div className="flex w-fit rounded-full bg-white px-2 py-1 shadow-md">
                        <div className="mr-1 h-1 w-1 rounded-full bg-green-300 pt-5 md:h-2 md:w-2"></div>
                        <p className="text-sm uppercase text-slate-400">
                            Vision for the Future
                        </p>
                    </div>
                    <div className="text-center md:text-start">
                        <h1 className="py-4 text-4xl">
                            Empowering Leaders, Innovating Tomorrow.
                        </h1>
                        <p className="text-base text-gray-400">
                            Every child is special in his/her own way and has
                            the ability and the capacity to attain his/her
                            dream. In order to achieve those dreams children
                            require a very strong reliable academic system which
                            will help them to climb up the stairs to success
                        </p>
                    </div>
                    <Link href={"/aboutUs"}>
                        <Button
                            variant={"secondary"}
                            className="mt-8 w-fit p-6 shadow-md shadow-cyan-200 hover:drop-shadow-md"
                        >
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
            {/* ADMINISTRATOR WORD */}
            <div className="mt-20 flex flex-col items-center justify-center font-montserrat">
                <div className="mb-6 flex items-center justify-center rounded-full bg-white px-2 py-1 shadow-md">
                    <div className="mr-2 h-2 w-2 rounded-full bg-green-300"></div>
                    <p className="text-base font-semibold text-slate-400">
                        DNAtoms{" "}
                    </p>
                </div>
                <h1 className="mb-4 text-center text-4xl leading-none tracking-tight text-zinc-900 md:text-4xl lg:text-4xl">
                    ADMINISTRATOR&apos;s Word
                </h1>
            </div>

            <div className="flex flex-col px-10 md:flex-row">
                <div className="relative w-full md:w-2/3">
                    <motion.div
                        initial="hidden"
                        animate="show"
                        transition={{ duration: 1 }}
                        variants={container}
                        className="relative"
                    >
                        <motion.div
                            variants={item}
                            transition={{ duration: 0, delay: 1 }}
                        >
                            <Image
                                src={"/images/administrator.png"}
                                width={1000}
                                height={1000}
                                alt="learn1"
                                className="relative z-10 h-auto w-full"
                            />
                        </motion.div>
                        <motion.div
                            variants={item}
                            transition={{ duration: 1, delay: 1.3 }}
                            className="absolute bottom-0 left-0 z-10 w-full"
                        >
                            <Image
                                src={"/images/learn3.png"}
                                width={1000}
                                height={1000}
                                alt="learn3"
                                className="relative z-10 mt-4 h-auto w-full"
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
                                className="absolute bottom-0 z-0 h-auto w-full"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                <div className="flex w-full flex-col items-center py-14 font-montserrat md:w-1/2 md:items-start">
                    <div className="flex w-fit rounded-full bg-white px-2 py-1 shadow-md">
                        <div className="mr-1 h-1 w-1 rounded-full bg-green-300 pt-5 md:h-2 md:w-2"></div>
                        <p className="text-sm uppercase text-slate-400">
                            Vision for the Future
                        </p>
                    </div>
                    <div className="text-center md:text-start">
                        <h1 className="py-4 text-4xl">
                            Inspiring Innovators, Shaping the Future.
                        </h1>
                        <p className="text-base text-gray-400">
                            Every child is special in his/her own way and has
                            the ability and the capacity to attain his/her
                            dream. In order to achieve those dreams children
                            require a very strong reliable academic system which
                            will help them to climb up the stairs to success
                        </p>
                    </div>
                    <Link href={"/aboutUs"}>
                        <Button
                            variant={"secondary"}
                            className="mt-8 w-fit p-6 shadow-md shadow-cyan-200 hover:drop-shadow-md"
                        >
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
