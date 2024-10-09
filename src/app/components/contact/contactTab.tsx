import React from "react";

const ContactTab = () => (
    <div>
        <section className="body-font text-gray-600">
            <div className="container mx-auto px-5 py-6">
                <div className="mb-10 flex w-full flex-col text-center">
                    <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-secondary">
                        DNAtoms Institute
                    </h2>
                    <h1 className="title-font text-2xl font-medium text-gray-900 sm:text-3xl">
                        Please reach out to us:
                    </h1>
                </div>
                <div className="-m-4 flex flex-wrap">
                    <div className="p-4 md:w-1/3">
                        <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                            <div className="mb-3 flex items-center">
                                <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="title-font text-lg font-medium text-gray-900">
                                    Innovative Learning Experiences
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="text-base leading-relaxed">
                                    At DNAtoms Institute, we blend theory with
                                    practice through interactive labs and
                                    real-world projects.
                                </p>
                                <p className="mt-3 inline-flex items-center text-sm text-indigo-500">
                                    Phone Number →
                                    <span className="text-red-700">
                                        +91-7718474501 / 77184 74501 /
                                        9800740115
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                            <div className="mb-3 flex items-center">
                                <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 className="title-font text-lg font-medium text-gray-900">
                                    Expert Faculty and Industry Connections
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="text-base leading-relaxed">
                                    Learn from leaders and experts with strong
                                    industry ties, ensuring relevant and
                                    practical education.
                                </p>
                                <p className="mt-3 inline-flex items-center text-sm text-indigo-500">
                                    Address →
                                    <span className="px-3 text-red-700">
                                        {" "}
                                        Champasari Rd, Ward 46, 734003
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="flex h-full flex-col rounded-lg bg-gray-100 p-8">
                            <div className="mb-3 flex items-center">
                                <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 className="title-font text-lg font-medium text-gray-900">
                                    A Supportive and Collaborative Community
                                </h2>
                            </div>
                            <div className="flex-grow">
                                <p className="text-base leading-relaxed">
                                    Our inclusive environment fosters
                                    collaboration and provides resources to help
                                    every student succeed.
                                </p>
                                <p className="mt-3 inline-flex items-center text-indigo-500">
                                    Email →
                                    <span className="px-3 text-red-700">
                                        {" "}
                                        dnatomsinstitute@gmail.com
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default ContactTab;
