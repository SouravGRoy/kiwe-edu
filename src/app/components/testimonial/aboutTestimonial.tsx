import Image from "next/image";
import React from "react";

const AboutTestimonial: React.FC = () => {
    return (
        <section className="relative isolate overflow-hidden bg-white px-6 py-12 lg:px-8">
            <div className="bg-white px-12 pt-8 font-montserrat md:px-20">
                <div>
                    <div className="mb-4 flex items-center justify-start space-x-4">
                        <button className="rounded-full border border-gray-200 bg-white p-2 px-4 text-xs font-semibold text-green-600 shadow-lg">
                            <span className="mr-1 inline-flex h-2 w-2 items-center justify-center rounded-full bg-green-500"></span>
                            START NOW
                        </button>
                    </div>
                    <div className="flex flex-col justify-between md:flex-row">
                        <h2 className="mb-8 text-start text-4xl font-bold">
                            Testimonials:-
                        </h2>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl">
                <Image
                    src="/images/logoX.png"
                    alt="Academist"
                    width={100}
                    height={100}
                    className="mx-auto w-48"
                />
                <figure className="mt-10">
                    <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>
                            &quot;Dreams are not those which come while we are
                            sleeping, but dreams are those when you don&apos;t
                            sleep before fulfilling them.&quot;
                        </p>
                    </blockquote>
                </figure>
            </div>
        </section>
    );
};

export default AboutTestimonial;
