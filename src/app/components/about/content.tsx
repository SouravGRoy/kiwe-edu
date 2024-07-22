import { Gi3dGlasses } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { GrWorkshop } from "react-icons/gr";
import { FaBuilding } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { GiProgression } from "react-icons/gi";

import { ImBooks } from "react-icons/im";
import Image from "next/image";

export default function Content() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Deploy faster
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                MESSAGE FROM THE DIRECTOR
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Every child is special in his/her own way and has the ability
                and the capacity to attain his/her dream. In order to achieve
                those dreams children require a very strong reliable academic
                system which will help them to climb up the stairs to success.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt="image"
            width={1000}
            height={1000}
            src={"/images/dummy1.png"}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                To quote James Clear, author of the book Atomic Habits &quot;In
                order to improve for good, you need to solve problems at the
                systems level. Fix the inputs and the outputs will fix
                themselves.&quot; here in DNAtoms Institute we not only prepare
                our children to obtain good marks in their examinations but also
                work at a grass root level system to improve their basics and
                concepts in their respective subjects. We are immensely happy
                that now you are a part of our Institution and we wish you luck
                and success for your future.
              </p>
              <h1 className="mt-8 font-bold text-3xl text-zinc-900">
                Why <span className="text-secondary">DNAtoms</span> Institute ?
              </h1>
              <ul role="list" className="mt-6 space-y-3 text-gray-600">
                <li className="flex gap-x-3">
                  <Gi3dGlasses
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      • Well qualified and highly competent faculties.
                    </strong>{" "}
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <GrWorkshop
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      • Comprehensive study materials are provided.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ImBooks
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      • Well equipped library for any reference books.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaBuilding
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      • Hostel facilities provided (only for girls)
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <TbAirConditioning
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      • Enabling environment equipped with proper classrooms
                      with AC.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GiProgression
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      • Weekly and monthly test series conducted to keep track
                      of the student's progress
                    </strong>{" "}
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <HiAcademicCap
                    aria-hidden="true"
                    className="mt-1 h-6 w-6 flex-none text-indigo-600"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      • Individual attention is given to students if they are
                      facing any academic problems.
                    </strong>{" "}
                  </span>
                </li>
              </ul>
              <p className="mt-8 font-bold underline text-red-500">
                Thank you, Sudakshina Hangma Sereng (Saesay ma'am)
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                All about DNAtoms :
              </h2>
              <p className="mt-6">
                DNAtoms Institute was created in 2023 by the vision and
                dedication of 4 visionaries Yowan Pradhan, Yogdeep Pradhan,
                Sudakshina Hangma Sereng and Neetika Tamang. Here the faculties
                prepare students to face academic challenges from the class of 9
                to 12 with affordable quality education. We aim to provide the
                best education to the students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
