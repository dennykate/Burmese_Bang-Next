import Image from "next/image";
import React from "react";

const SideBannerAds = () => {
  return (
    <div className="max-w-[240px]">
      <Image
        src={
          "https://channelmyanmar.org/wp-content/uploads/2020/07/mmbus_ads_4.png"
        }
        className="w-full"
        width={200}
        height={10}
        alt="ads"
      />
    </div>
  );
};

export default SideBannerAds;
