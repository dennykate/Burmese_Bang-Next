import Image from "next/image";
import React, { useEffect } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import BannerAds from "./BannerAds";
import NativeAds from "./NativeAds";
import Thumbnails from "./Thumbnails";
import SideBannerAds from "./SideBannerAds";

const VideoContainer = ({ data }) => {
  const { title, url, thumbnail, popularity, duration, rate, photos } =
    data?.video;

  const videoSrc = {
    type: "video",
    title: title,
    sources: [
      {
        src: url,
        type: "video/mp4",
        size: 1080,
      },
    ],
    poster: thumbnail,
  };

  return (
    <div className="w-full flex items-start gap-[8px] my-[12px] sm:flex-row flex-col">
      <div className="w-full bg-gray-800 sm:px-[20px] px-[5px] py-[10px] pb-[20px]">
        <div className="w-full ">
          <Plyr source={videoSrc} autoPlay={true} />
        </div>

        <div className="my-[10px]">
          <BannerAds />
        </div>

        <div className="flex flex-col items-start py-[20px] gap-[6px]">
          <div className="flex items-center gap-[10px]">
            <h1 className=" font-raleWay  sm:text-base text-sm text-white">
              Name -{" "}
            </h1>
            <h1 className=" font-raleWay font-semibold sm:text-lg text-xs text-[#f5f5f5]">
              {title}
            </h1>
          </div>

          <div className="flex items-center gap-[10px]">
            <h1 className=" font-raleWay  sm:text-base text-sm text-white">
              Duration -{" "}
            </h1>
            <h1 className=" font-raleWay font-semibold sm:text-lg text-xs text-[#f5f5f5]">
              {duration.split(":")[0]}minutes
            </h1>
          </div>

          <div className="flex items-center gap-[10px]">
            <h1 className=" font-raleWay  sm:text-base text-sm text-white">
              Popularity -{" "}
            </h1>
            <h1 className=" font-raleWay font-semibold sm:text-lg text-xs text-[#f5f5f5]">
              {popularity}
            </h1>
          </div>

          <div className="flex items-center gap-[10px]">
            <h1 className=" font-raleWay  sm:text-base text-sm text-white">
              Rate -{" "}
            </h1>
            <h1 className=" font-raleWay font-semibold sm:text-lg text-xs text-[#f5f5f5]">
              {rate}
            </h1>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <a
            href={url}
            download
            target="_blank"
            rel="noreferrer"
            className="px-[32px] py-[8px] bg-primary rounded hover:bg-transparent border-[2px] border-primary 
           transition-all duration-200 ease-in-out "
          >
            <h1 className=" text-white font-bold font-raleWay ">Download</h1>
          </a>
        </div>

        <div className="my-[40px]">
          <NativeAds />
        </div>

        <Thumbnails photos={photos} />

        <div className="mt-[40px]">
          <BannerAds />
        </div>
      </div>

      <div className="sm:w-[240px] w-auto p-[5px] bg-gray-800 flex sm:flex-col flex-row gap-[10px]">
        <SideBannerAds />
        <SideBannerAds />
      </div>
    </div>
  );
};

export default VideoContainer;
