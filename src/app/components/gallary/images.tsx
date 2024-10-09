import React from "react";
import Image from "next/image";

const images = [
  "/images/Gallary1.jpeg",
  "/images/Gallary7.jpeg",
  "/images/Gallary6.jpeg",
  "/images/Gallary4.jpeg",
  "/images/Gallary2.jpeg",
  "/images/Gallary3.jpeg",

  "/images/Gallary5.jpeg",
  "/images/Gallary8.jpeg",
  "/images/Gallary11.jpeg",
  "/images/Gallary10.jpeg",
  "/images/Gallary9.jpeg",
  "/images/Gallary22.JPG",

  "/images/Gallary16.jpeg",
  "/images/Gallary17.jpeg",
  "/images/Gallary20.jpeg",
  "/images/Gallary21.jpeg",

  "/images/Gallary25.jpeg",
  "/images/Gallary26.jpeg",
  "/images/Gallary27.jpeg",
  "/images/Gallary28.jpeg",
  "/images/Gallary29.jpeg",
  "/images/Gallary30.jpeg",
  "/images/Gallary31.jpeg",
  "/images/Gallary32.jpeg",
  "/images/Gallary33.jpeg",
  "/images/Gallary34.jpeg",
  "/images/Gallary35.jpeg",
  "/images/Gallary36.jpeg",
];

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:px-16 px-6 py-12 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <Image
            className="h-auto max-w-full rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            src={image}
            alt="image"
            height={1000}
            width={1000}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
