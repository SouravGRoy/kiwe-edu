import Image from "next/image";
import React from "react";

const AboutTestimonial: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-12 lg:px-8">
      <div className="bg-white pt-8 md:px-20 px-12 font-montserrat">
        <div>
          <div className="flex items-center justify-start space-x-4 mb-4 ">
            <button className="bg-white border border-gray-200 text-green-600 rounded-full px-4 shadow-lg p-2 text-xs font-semibold">
              <span className="inline-flex items-center  justify-center  h-2 w-2 bg-green-500 rounded-full mr-1"></span>
              START NOW
            </button>
          </div>
          <div className="flex justify-between md:flex-row flex-col ">
            <h2 className="text-4xl font-bold text-start mb-8">
              Testimonials:&ndash;
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
              &quot;Dreams are not those which come while we are sleeping, but
              dreams are those when you don't sleep before fulfilling
              them.&quot;
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt="Judith Black"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              width={40} // Adjust width and height as needed
              height={40}
              className="mx-auto rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Judith Black</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">Director</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default AboutTestimonial;
