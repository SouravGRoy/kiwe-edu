import React from "react";
import AnimatedGridPatternDemo from "../home/grid";
import { Button } from "@/components/ui/button";
import NumberTickerDemo from "./numberTicker";
import Link from "next/link";

export default function Stats() {
  return (
    <div className=" inset-0 py-12 md:mt-20 bg-gradient-to-t from-primary/100 to-transparent bg-cover bg-right md:bg-center relative w-full min-h-screen">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex md:px-20  md:space-x-10 md:flex-row flex-col items-center relative">
          <AnimatedGridPatternDemo />
          <div className="md:w-1/2 flex flex-col md:mt-0 mt-10 font-montserrat md:items-start md:text-left items-center text-center z-10">
            <h1 className="title-font md:text-3xl text-3xl mb-4 font-medium text-gray-900">
              Explore Our Innovative Courses
            </h1>
            <p className="mb-8 leading-relaxed">
              &quot;The beautiful thing about learning is that nobody can take
              it from you.&quot;- B.B. King
            </p>
            <div className="flex justify-center">
              <div className="flex space-x-3 flex-row z-30">
                <Link href={"/coursesUs"}>
                  <Button
                    variant="outline"
                    className="text-zinc-900 backdrop-blur-sm mb-2 md:mr-4"
                  >
                    View Programs
                  </Button>
                </Link>
                <Link href={"/contactUs"}>
                  <Button
                    variant="secondary"
                    className="text-black font-bold md:px-4 py-2 rounded"
                  >
                    Enroll Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <NumberTickerDemo />
      </section>
    </div>
  );
}
