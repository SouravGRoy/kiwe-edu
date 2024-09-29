import Image from "next/image";
import React from "react";

export default function Loader() {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center">
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
