"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface CardProps {
    title: string;
    description: string;
    imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc }) => {
    return (
        <div className="flex h-[400px] flex-col rounded-lg border-t-2 bg-white p-5 shadow-lg">
            {" "}
            {/* Fixed height */}
            <div className="feature-icon mb-3 inline-flex items-center justify-start text-2xl text-primary">
                <Image
                    src={imageSrc}
                    width={100}
                    height={60}
                    alt={title}
                    className="w-100 h-100 rounded-full object-cover object-center"
                />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900 underline">
                {title}
            </h3>
            <p className="flex-shrink">{description}</p>{" "}
            {/* Makes description take up available space */}
            <a
                href="/coursesUs"
                className="icon-link mt-8 inline-flex items-center text-blue-500"
            >
                Read More
                <svg className="bi ml-2 h-4 w-4" fill="currentColor">
                    <use xlinkHref="#chevron-right" />
                </svg>
            </a>
        </div>
    );
};

export default function Cards() {
    return (
        <div className="flex justify-center space-x-4">
            <div className="mb-20 px-10 md:mb-6 md:px-20">
                <div className="-ml-2 flex">
                    <div className="grid gap-4 md:grid-cols-3">
                        <div className="mb-10 mt-10 md:my-20 md:mb-0">
                            <Card
                                title="REGULAR (6-10)"
                                description="This Course offers education for students pursuing Science, Arts, or Commerce streams, providing in-depth academic preparation from April to February...."
                                imageSrc={"/images/s1.jpg"}
                            />
                        </div>
                        <div className="mb-10 md:my-20 md:mb-0">
                            <Card
                                title="REGULAR (10-12 ICSE AND CBSE)"
                                description="This intensive course is designed for students in their final academic year of Grades 10 and 12, providing focused preparation in Science, Arts, or Commerce streams..."
                                imageSrc={"/images/s2.jpg"}
                            />
                        </div>
                        <div className="md:my-20">
                            <Card
                                title="CRASH COURSE (ICSE AND CBSE)"
                                description="This crash course is designed for students in Grades 10 and 12, for revision of the Science, Arts, or Commerce. Spanning from December to early February..."
                                imageSrc={"/images/s3.jpg"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
