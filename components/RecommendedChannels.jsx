
import React from "react";
import { recommendedChannelsData } from "../utils/data";
import ChannelCard from "./ChannelCard";

const RecommendedChannels = () => {
  return (
    <div className="w-full py-[20px] px-[10px]">
      <h1 className="text-lg font-raleWay text-white font-semibold">
        Recommended Channels
      </h1>
      <div className="grid md:grid-cols-10 grid-cols-5 md:gap-[12px] sm:gap-[8px] gap-[3px] my-[10px]">
        {recommendedChannelsData.map((data, index) => (
          <ChannelCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedChannels;
