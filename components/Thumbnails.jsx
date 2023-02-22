import Image from "next/image";
import React from "react";

const Thumbnails = ({ photos }) => {
  return (
    <div className="w-full grid md:grid-cols-4 grid-cols-3  gap-[5px] ">
      {photos.map((photo, index) => (
        <div
          key={index}
          className=" hover:scale-110 transition-all duration-200 ease-in-out"
        >
          <Image
            src={photo}
            width={1280}
            height={1}
            className="w-full h-full"
            alt="thumbnail"
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
