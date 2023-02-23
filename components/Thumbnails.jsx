import Image from "next/image";
import React from "react";

const Thumbnails = ({ photos, handleThumbnailClick }) => {
  const calcTime = (strTime) => {
    const timeArr = strTime.split(":");
    const minute = parseInt(timeArr[0]) * 60;
    const totalTime = minute + parseInt(timeArr[1]);

    return totalTime;
  };

  return (
    <div className="w-full grid grid-cols-5   gap-[5px] ">
      {photos.map(({ photo, time }, index) => (
        <div
          onClick={() => {
            handleThumbnailClick(calcTime(time));
          }}
          key={index}
          className="h-auto cursor-pointer relative"
        >
          <Image
            src={photo}
            width={1280}
            height={1}
            className="w-full h-full object-cover opacity-90 hover:opacity-100"
            alt="thumbnail"
          />

          <div className="absolute sm:bottom-[5px] sm:right-[5px] bottom-[1px] right-[1px]">
            <h1
              className="sm:text-[10px] text-[6px] font-semibold font-mono text-white sm:px-[8px] px-[4px] sm:py-[2px] 
             py-[1px] bg-black bg-opacity-70 rounded-md"
            >
              {time}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
