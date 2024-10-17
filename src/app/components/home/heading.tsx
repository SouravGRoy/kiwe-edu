import React from "react";

export default function Heading() {
    return (
        <div className="flex flex-col items-center justify-center font-montserrat md:mt-28">
            <div className="mb-6 flex items-center justify-center rounded-full bg-white px-2 py-1 shadow-md">
                <div className="mr-2 h-2 w-2 rounded-full bg-green-300"></div>
                <p className="text-base font-semibold text-slate-400">
                    DNAtoms
                </p>
            </div>
            <h1 className="mb-4 text-center text-4xl leading-none tracking-tight text-zinc-900 md:text-4xl lg:text-4xl">
                Redefining Education for a Brighter Tomorrow
            </h1>
            <p className="w-3/4 text-center text-lg font-normal text-gray-500 sm:px-16 lg:text-base xl:px-48 dark:text-gray-400">
                Empowering students with innovative learning experiences that
                shape a future full of possibilities.
            </p>
        </div>
    );
}
