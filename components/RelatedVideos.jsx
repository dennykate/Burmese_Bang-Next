import React, { useState } from "react";

import Card from "./Card";
import BannerAds from "./BannerAds";

const RelatedVideos = ({ relatedVideos }) => {
  const [limitVideos, setLimitVideos] = useState(20);

  const handleClick = () => {
    setLimitVideos(limitVideos + 20);
  };
  return (
    <div className="my-[10px] sm:p-[10px] p-[5px] bg-gray-800 relative">
      <div className="mb-[10px]">
        <BannerAds />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[10px] ">
        {relatedVideos.slice(0, limitVideos).map((video, index) => (
          <Card key={index} data={video} related={true} />
        ))}
      </div>

      {limitVideos < relatedVideos.length && (
        <div className="py-[10px] w-full flex justify-center items-center">
          <div className="sm:w-[260px] w-[200px] sm:h-[40px] h-[30px] flex items-center">
            <div
              className="sm:w-[100px] w-[80px] h-full flex justify-center items-center border-[1px] border-primary 
              text-white font-raleWay sm:text-base text-sm"
            >
              {limitVideos}/{relatedVideos.length}
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

      <div className="mt-[10px]">
        <BannerAds />
      </div>
    </div>
  );
};

export default RelatedVideos;
