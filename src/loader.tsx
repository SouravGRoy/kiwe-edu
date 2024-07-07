import React from "react";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="w-screen h-screen  flex justify-center items-center flex-col">
      <Image
        src="/images/cloudX.png"
        width={80}
        height={80}
        alt="logo"
        className="rounded-full"
      />
      <h1 className="mt-3 text-lg font-bold">
        Loading the Best Courses for you...
      </h1>
    </div>
  );
}
