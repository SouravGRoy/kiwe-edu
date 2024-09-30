"use client";

import React, { useState } from "react";
import { contentType } from "../../../../content";
import { PiStudentFill } from "react-icons/pi";
import Image from "next/image";
import { GiBookshelf } from "react-icons/gi";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type CoursesCardProps = {
  courses: contentType[];
};

const CourseCard: React.FC<{
  course: contentType;
  isOpen: boolean;
  toggleAccordion: () => void;
}> = ({ course, isOpen, toggleAccordion }) => {
  return (
    <div className="bg-white shadow-lg border-t-2 p-5 rounded-lg mb-4 flex flex-col h-full">
      <div className="flex flex-col justify-around h-full">
        <div className="feature-icon flex items-center justify-start text-primary text-2xl mb-5">
          <Image
            src={course.image}
            width={100}
            height={120}
            alt={course.title}
            className="w-24 h-24 shadow-lg object-cover rounded-full"
          />
        </div>
        <div className="flex space-x-2">
          <GiBookshelf size={24} />
          <h3 className="text-xl font-bold underline text-gray-900 mb-2">
            {course.title}-
          </h3>
        </div>

        <p className="flex-grow text-gray-500">{course.description}</p>

        <div className="bg-primary flex items-center px-4 justify-between ">
          <div className="flex items-center">
            <PiStudentFill />
            <p className="text-sm px-2 py-4">Class - {course.eligibility}</p>
          </div>

          <button
            onClick={toggleAccordion}
            className="icon-link text-blue-500 inline-flex items-center focus:outline-none"
          >
            {isOpen ? "Show Less" : "Read More"}
            <svg className="bi w-4 h-4 ml-2" fill="currentColor">
              <use xlinkHref="#chevron-right" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="p-4 mt-4 bg-gray-100 rounded-lg">
          <p className="mb-2">
            <strong>Course:</strong> {course.course}
          </p>
          <p className="mb-2">
            <strong>Eligibility:</strong> {course.eligibility}
          </p>
          <p className="mb-2">
            <strong>Duration:</strong> {course.duration}
          </p>
          <p className="mb-2">
            <strong>Course Fee:</strong> {course.courseFee}
          </p>
          <p className="mb-2">
            <strong>Description:</strong> {course.description}
          </p>
          <Link href={course.brochure} download>
            {" "}
            <Button variant={"secondary"}>Download Brochure</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

const CoursesCard: React.FC<CoursesCardProps> = ({ courses }) => {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedCardId(expandedCardId === id ? null : id);
  };

  return (
    <div className="container mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          isOpen={expandedCardId === course.id}
          toggleAccordion={() => handleToggle(course.id)}
        />
      ))}
    </div>
  );
};

export default CoursesCard;
