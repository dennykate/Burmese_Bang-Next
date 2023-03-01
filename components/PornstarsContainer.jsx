import React, { useState } from "react";
import BannerAds from "./BannerAds";
import PornstarCard from "./PornstarCard";

const PornstarsContainer = ({ pornstars }) => {
  const [limitPornstars, setLimitPornstars] = useState(24);

  const handleClick = () => setLimitPornstars(limitPornstars + 24);

  return (
    <div className="w-full py-[20px]">
      <div className="w-full p-[10px] grid md:grid-cols-6 sm:grid-cols-4 grid-cols-3 sm:gap-[15px] gap-[3px]">
        {pornstars.slice(0, limitPornstars).map((pornstar, index) => (
          <PornstarCard key={index} data={pornstar} />
        ))}
      </div>

      <div className="py-[16px]">
        <BannerAds />
      </div>

      {limitPornstars < pornstars.length && (
        <div className="pt-[10px] w-full flex justify-center items-center">
          <div className="sm:w-[260px] w-[200px] sm:h-[40px] h-[30px] flex items-center">
            <div
              className="sm:w-[100px] w-[80px] h-full flex justify-center items-center border-[1px] border-primary 
        text-white font-raleWay sm:text-base text-sm"
            >
              {limitPornstars}/{pornstars.length}
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

export default PornstarsContainer;
