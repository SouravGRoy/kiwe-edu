"use client";

import { Material } from "@/types";
import { IoIosArrowForward } from "react-icons/io";
import { MaterialsTable } from "./materials-table";

interface PageProps {
    materials: Material[];
    isAuth: boolean;
}

export function MaterialPage({ materials, isAuth }: PageProps) {
    return (
        <div>
            <div
                className="h-full w-full"
                style={{ backgroundImage: "url('/images/background1.jpg')" }}
            >
                <div className="flex flex-col items-center justify-center py-14 md:py-28">
                    <h1 className="my-6 rounded-full p-4 px-6 text-5xl font-extrabold text-secondary shadow-md">
                        Materials
                    </h1>
                    <nav className="flex" aria-label="Breadcrumb">
                        <div className="inline-flex items-center space-x-1 md:space-x-3">
                            <div className="inline-flex items-center">
                                <a
                                    href="/"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                    Home
                                </a>
                                <IoIosArrowForward />
                                <a
                                    href="/"
                                    className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-600"
                                >
                                    Materials
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="mb-4 mt-8 flex items-center justify-center space-x-4 font-montserrat">
                <button className="rounded-full border border-gray-200 bg-white p-2 px-4 text-xs font-semibold text-green-600 shadow-lg">
                    <span className="mr-1 inline-flex h-2 w-2 items-center justify-center rounded-full bg-green-500"></span>
                    EXPLORE OUR Materials
                </button>
            </div>

            <div className="flex justify-center p-5">
                <div className="container space-y-8">
                    <MaterialsTable materials={materials} isAuth={isAuth} />
                </div>
            </div>
        </div>
    );
}
