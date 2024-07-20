"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SmallVideoPlayer = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-0 right-0 flex justify-end w-full md:hidden p-2"
          style={{ zIndex: 9999 }}
        >
          <div className="relative bg-black w-1/2 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute top-1 right-1 z-10">
              <button
                onClick={handleClose}
                className="text-white text-lg"
                style={{ zIndex: 10000 }} // Ensure the button is on top
              >
                &times;
              </button>
            </div>
            <video
              className="w-full object-cover h-28"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://cdn.sanity.io/files/r115idoc/production/06fbbb468c9a75dec6e4a6207356589cf3858d09.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmallVideoPlayer;
