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
    <div className="flex-col bg-white shadow-lg border-t-2 p-5 rounded-lg flex h-[350px]"> {/* Fixed height */}
      <div className="feature-icon inline-flex items-center justify-start text-primary text-2xl mb-3">
        <Image
          src={imageSrc}
          width={100}
          height={60}
          alt={title}
          className="w-100 h-100 object-cover rounded-full object-center"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 underline text-gray-900">
        {title}
      </h3>
      <p className="flex-shrink">{description}</p> {/* Makes description take up available space */}
      <a
        href="/coursesUs"
        className="icon-link text-blue-500 inline-flex items-center mt-8"  
      >
        Read More
        <svg className="bi w-4 h-4 ml-2" fill="currentColor">
          <use xlinkHref="#chevron-right" />
        </svg>
      </a>
    </div>
  );
};

export default function Cards() {
  return (
    <div className="flex justify-center space-x-4">
      <div className="md:px-20 px-10 md:mb-6 mb-20">
        <div className="flex -ml-2">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:my-20 mt-10 md:mb-0 mb-10">
              <Card
                title="REGULAR-"
                description="This Course offers education for students pursuing Science, Arts, or Commerce streams, providing in-depth academic preparation from April to February...."
                imageSrc={"/images/s1.jpg"}
              />
            </div>
            <div className="md:my-20 md:mb-0 mb-10">
              <Card
                title="REGULAR-"
                description="This intensive course is designed for students in their final academic year of Grades 10 and 12, providing focused preparation in Science, Arts, or Commerce streams..."
                imageSrc={"/images/s2.jpg"}
              />
            </div>
            <div className="md:my-20 ">
              <Card
                title="CRASH COURSE"
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
