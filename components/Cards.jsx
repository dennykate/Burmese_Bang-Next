import React, { useState } from "react";
import BannerAds from "./BannerAds";
import Card from "./Card";

const Cards = ({ videos, myRef }) => {
  const [limitVideos, setLimitVideos] = useState(20);

  const handleClick = () => {
    setLimitVideos(limitVideos + 20);
  };

  return (
    <div ref={myRef} className="w-full py-[20px] ">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-[12px] gap-[5px] px-[5px] ">
        {videos.slice(0, limitVideos).map((video, index) => (
          <Card data={video} key={index} />
        ))}
      </div>

      <div className="py-[16px]">
        <BannerAds />
      </div>

      {limitVideos < videos.length && (
        <div className="pt-[10px] w-full flex justify-center items-center">
          <div className="sm:w-[260px] w-[200px] sm:h-[40px] h-[30px] flex items-center">
            <div
              className="sm:w-[100px] w-[80px] h-full flex justify-center items-center border-[1px] border-primary 
              text-white font-raleWay sm:text-base text-sm"
            >
              {limitVideos}/{videos.length}
            </div>
            <button
              onClick={handleClick}
              className="sm:w-[140px] w-[120px] h-full flex justify-center items-center text-white bg-primary font-raleWay
              font-medium hover:bg-opacity-80 sm:text-base text-sm"
            >
              See More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;
