import React from "react";

export default function Heading() {
  return (
    <div className="flex flex-col font-montserrat md:mt-28  justify-center items-center">
      <div className="rounded-full bg-white mb-6 flex items-center justify-center shadow-md px-2 py-1">
        <div className="rounded-full w-2 h-2 bg-green-300 mr-2"></div>
        <p className="text-base text-slate-400 font-semibold">DNAtoms</p>
      </div>
      <h1 className="mb-4 text-4xl text-center   leading-none tracking-tight text-zinc-900 md:text-4xl lg:text-4xl ">
        Redefining Education for a Brighter Tomorrow
      </h1>
      <p className=" text-lg w-3/4 text-center font-normal text-gray-500 lg:text-base sm:px-16 xl:px-48 dark:text-gray-400">
        Experience visionary education tailored to unleash your potential and
        prepare you for a dynamic future at Visionary Institute.
      </p>
    </div>
  );
}
