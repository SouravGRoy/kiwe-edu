import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { contentType } from "../../../../content";
import { Button } from "@/components/ui/button";
import { IoIosTime } from "react-icons/io";
import Image from "next/image";

type CoursesCardProps = {
  courses: contentType[];
};

const CourseCard: React.FC<{ course: contentType }> = ({ course }) => (
  <Dialog>
    <DialogTrigger asChild>
      <div className="relative font-montserrat cursor-pointer shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
        <Image
          src={course.image}
          width={1000}
          height={1000}
          alt={course.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded">
          <h2 className="text-sm font-bold">{course.title}</h2>
        </div>
        <div className="absolute bottom-10 w-full bg-black bg-opacity-35 text-white px-2 py-2 flex flex-col items-start">
          <h2 className="text-sm font-bold">{course.title}</h2>
          <p className="text-xs">{course.course}</p>
        </div>
        <div className="bg-primary flex items-center px-8 justify-start">
          <IoIosTime />
          <p className="text-sm  py-4"> 10 days ago</p>
        </div>
      </div>
    </DialogTrigger>
    <DialogContent className="p-6 bg-white font-montserrat max-w-lg mx-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-semibold">
          {course.title}
        </DialogTitle>
        <DialogDescription>
          <Image
            src={course.image}
            alt={course.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
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
          <Button variant={"secondary"}>Download Brochure</Button>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const CoursesCard: React.FC<CoursesCardProps> = ({ courses }) => {
  return (
    <div className="container mx-auto p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesCard;
