import React from "react";
import Image from "next/image";

const images = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];

const Gallery: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:px-16 px-6 py-12 md:grid-cols-4 gap-4">
      {Array.from({ length: 4 }).map((_, colIndex) => (
        <div className="grid gap-4" key={colIndex}>
          {images
            .slice(colIndex * 3, colIndex * 3 + 3)
            .map((image, rowIndex) => (
              <div key={rowIndex}>
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
      ))}
    </div>
  );
};

export default Gallery;
