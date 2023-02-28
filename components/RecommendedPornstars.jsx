import React from "react";
import { recommendedPornstarsData } from "../utils/data";
import PornstarCard from "./PornstarCard";

const RecommendedChannels = () => {
  return (
    <div className="w-full py-[20px] px-[10px]">
      <h1 className="text-lg font-raleWay text-white font-semibold">
        Recommended Pornstars
      </h1>
      <div className="grid md:grid-cols-6 grid-cols-5 md:gap-[15px] gap-[8px] my-[10px]">
        {recommendedPornstarsData.map((data, index) => (
          <PornstarCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedChannels;
