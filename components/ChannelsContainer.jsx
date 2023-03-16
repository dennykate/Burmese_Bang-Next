import React from "react";
import BannerAds from "./BannerAds";
import ChannelCard from "./ChannelCard";

const ChannelsContainer = ({ channels }) => {
  return (
    <div className="w-full ">
      <div className="w-full sm:p-[10px] p-[4px] grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-[12px] gap-[4px]">
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
