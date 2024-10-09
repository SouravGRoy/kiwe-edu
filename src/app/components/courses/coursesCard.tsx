"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GiBookshelf } from "react-icons/gi";
import { PiStudentFill } from "react-icons/pi";
import { contentType } from "../../../../content";

type CoursesCardProps = {
    courses: contentType[];
};

const CourseCard: React.FC<{
    course: contentType;
    isOpen: boolean;
    toggleAccordion: () => void;
}> = ({ course, isOpen, toggleAccordion }) => {
    return (
        <div className="mb-4 flex h-full flex-col rounded-lg border-t-2 bg-white p-5 shadow-lg">
            <div className="flex h-full flex-col justify-around">
                <div className="feature-icon mb-5 flex items-center justify-start text-2xl text-primary">
                    <Image
                        src={course.image}
                        width={100}
                        height={120}
                        alt={course.title}
                        className="h-24 w-24 rounded-full object-cover shadow-lg"
                    />
                </div>
                <div className="flex space-x-2">
                    <GiBookshelf size={24} />
                    <h3 className="mb-2 text-xl font-bold text-gray-900 underline">
                        {course.title}-
                    </h3>
                </div>

                <p className="flex-grow text-gray-500">{course.description}</p>

                <div className="flex items-center justify-between bg-primary px-4">
                    <div className="flex items-center">
                        <PiStudentFill />
                        <p className="px-2 py-4 text-sm">
                            Class - {course.eligibility}
                        </p>
                    </div>

                    <button
                        onClick={toggleAccordion}
                        className="icon-link inline-flex items-center text-blue-500 focus:outline-none"
                    >
                        {isOpen ? "Show Less" : "Read More"}
                        <svg className="bi ml-2 h-4 w-4" fill="currentColor">
                            <use xlinkHref="#chevron-right" />
                        </svg>
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="mt-4 rounded-lg bg-gray-100 p-4">
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
                        <strong>Description:</strong> {course.description}
                    </p>
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
        <div className="container mx-auto grid grid-cols-1 gap-8 p-5 sm:grid-cols-2 md:grid-cols-3">
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
