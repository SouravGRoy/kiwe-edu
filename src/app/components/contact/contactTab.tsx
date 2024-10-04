import React from "react";

const ContactTab = () => (
  <div>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-xs text-secondary tracking-widest font-medium title-font mb-1">
            DNAtoms Institute
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Please reach out to us:
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Innovative Learning Experiences
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  At DNAtoms Institute, we blend theory with practice through
                  interactive labs and real-world projects.
                </p>
                <p
                
                  className="mt-3 text-sm text-indigo-500 inline-flex items-center"
                >
                  Phone Number →
               
                <span className="text-red-700">+91-7718474501 / 77184 74501 / 9800740115</span>  
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  Expert Faculty and Industry Connections
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Learn from leaders and experts with strong industry ties,
                  ensuring relevant and practical education.
                </p>
                <p
                 
                  className="mt-3 text-sm  text-indigo-500 inline-flex items-center"

                >Address → 
                <span className="text-red-700 px-3"> Champasari Rd, Ward 46, 734003</span>
                 
                 
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 text-lg title-font font-medium">
                  A Supportive and Collaborative Community
                </h2>
              </div>
              <div className="flex-grow">
                <p className="leading-relaxed text-base">
                  Our inclusive environment fosters collaboration and provides
                  resources to help every student succeed.
                </p>
                <p
                 
                  className="mt-3  text-indigo-500 inline-flex items-center"
                >
                 Email →
                 <span className="text-red-700 px-3"> dnatomsinstitute@gmail.com</span>
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
