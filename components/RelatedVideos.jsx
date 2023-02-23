import React from "react";
import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Card from "./Card";
import BannerAds from "./BannerAds";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Responsive = {
  0: {
    items: 2,
  },
  768: {
    items: 3,
  },
  1024: {
    items: 4,
  },
};
const RelatedVideos = ({ relatedVideos }) => {
  return (
    <div className="my-[10px] p-[10px] bg-gray-800 relative">
      <OwlCarousel
        className="owl-theme flex"
        loop
        margin={10}
        responsive={Responsive}
        dots={true}
        dotData={true}
        nav={false}
        autoplay={true}
        autoplaySpeed={500}
        autoplayHoverPause={true}
      >
        {relatedVideos.map((video, index) => (
          <Card key={index} data={video} />
        ))}
      </OwlCarousel>
      <div className="mt-[10px]">
        <BannerAds />
      </div>
    </div>
  );
};

export default RelatedVideos;
