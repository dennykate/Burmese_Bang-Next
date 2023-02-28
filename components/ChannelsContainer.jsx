import React from "react";
import ChannelCard from "./ChannelCard";

const ChannelsContainer = ({ channels }) => {
  return (
    <div className="w-full p-[10px] grid md:grid-cols-8 sm:grid-cols-6 grid-cols-4 sm:gap-[20px] gap-[8px]">
      {channels.map((channel, index) => (
        <ChannelCard key={index} data={channel} />
      ))}
    </div>
  );
};

export default ChannelsContainer;
