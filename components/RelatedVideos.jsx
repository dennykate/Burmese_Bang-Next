import React from "react";
import dynamic from "next/dynamic";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Card from "./Card";

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
    <div className="my-[10px] p-[10px] bg-gray-800">
      <OwlCarousel
        className="owl-theme flex"
        loop
        margin={10}
        responsive={Responsive}
        dots={false}
        nav={false}
        autoplay={true}
        autoplaySpeed={1000}
        autoplayHoverPause={true}
      >
        {relatedVideos.map((video, index) => (
          <Card key={index} data={video} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default RelatedVideos;
