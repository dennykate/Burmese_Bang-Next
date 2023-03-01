import React from "react";
import BannerAds from "./BannerAds";
import ChannelCard from "./ChannelCard";

const ChannelsContainer = ({ channels }) => {
  return (
    <div className="w-full ">
      <div className="w-full p-[10px] grid md:grid-cols-8 sm:grid-cols-6 grid-cols-4 sm:gap-[20px] gap-[8px]">
        {channels.map((channel, index) => (
          <ChannelCard key={index} data={channel} />
        ))}
      </div>
      <div className="py-[16px]">
        <BannerAds />
      </div>
    </div>
  );
};

export default ChannelsContainer;
