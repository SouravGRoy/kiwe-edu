import React from "react";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="w-screen h-screen  flex justify-center items-center flex-col">
      <Image
        src="/images/logoX.png"
        priority
        width={150}
        height={150}
        alt="logo"
        className="rounded-full"
      />
      <h1 className="mt-3 text-lg font-bold">We are loading !</h1>
    </div>
  );
}
